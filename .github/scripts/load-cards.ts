import core from '@actions/core'
import github from '@actions/github'
import TCGdex from '@tcgdex/sdk'

// Regular expressions to match file paths
const DATA_REGEX = /^data\/([^\/]+)\/([^\/]+)\/([^\/]+)\.ts$/;
const DATA_ASIA_REGEX = /^data-asia\/([^\/]+)\/([^\/]+)\/([^\/]+)\.ts$/;

async function run() {
  try {
    // Get GitHub token
    const token = core.getInput('github-token', { required: true });
    const octokit = github.getOctokit(token);

    // Get the current context
    const context = github.context;
    const { owner, repo } = context.repo;
    const repoFullName = `${owner}/${repo}`;

    let changedFiles: string[] = [];
    let prNumber: number | undefined;

    // Check if this is a pull request
    if (context.payload.pull_request) {
      prNumber = context.payload.pull_request.number;

      // Get list of files changed in the PR
      const response = await octokit.rest.pulls.listFiles({
        owner,
        repo,
        pull_number: prNumber,
      });

      changedFiles = response.data.map(file => file.filename);
    }
    // Check if this is a push event
    else if (context.payload.commits) {
      // For push events, the list of changed files comes directly in the payload
      const commits = context.payload.commits;

      // Collect all unique files from all commits
      const filesSet = new Set<string>();

      for (const commit of commits) {
        if (commit.added) commit.added.forEach((file: string) => filesSet.add(file));
        if (commit.modified) commit.modified.forEach((file: string) => filesSet.add(file));
        if (commit.removed) commit.removed.forEach((file: string) => filesSet.add(file));
      }

      changedFiles = Array.from(filesSet);
    }

    // Prepare the PR comment
    let commentBody = '## 🃏 Pokémon Card Changes\n\n';
    const cardResults = [];

    if (changedFiles.length === 0) {
      commentBody += 'No card files were changed in this PR.\n';
    } else {
      console.log('Files changed in this event:');

      for (const file of changedFiles) {
        console.log(` - ${file}`);

        // Check if the file follows one of our patterns
        let match = file.match(DATA_REGEX);
        let cardInfo = null;

        if (match) {
          const tcgdex = new TCGdex();
          const [_, serieName, setName, cardLocalId] = match;
          try {
            // Get card information using the TCGdex SDK
            const set = (await tcgdex.set.get(setName!))!
            const card = await tcgdex.card.get(`${set.id}-${cardLocalId}`)
            console.log(`   Card: ${card!.name} (${card!.id})`);
            cardInfo = { file, card };
          } catch (error) {
            console.log(`   Failed to fetch card information: ${error instanceof Error ? error.message : 'Unknown error'}`);
            cardInfo = { file, error: 'Failed to fetch card information' };
          }
        } else {
          // Check if it's an Asia file
          match = file.match(DATA_ASIA_REGEX);
          if (match) {
            const [_, serieId, setId, cardLocalId] = match;
            const tcgdex = new TCGdex('ja');
            try {
              // Get card information using the TCGdex SDK
              const card = (await tcgdex.card.get(`${setId}-${cardLocalId}`))!
              console.log(`   Card: ${card.name} (${card.id})`);
              cardInfo = { file, card };
            } catch (error) {
              console.log(`   Failed to fetch card information: ${error instanceof Error ? error.message : 'Unknown error'}`);
              cardInfo = { file, error: 'Failed to fetch card information' };
            }
          }
        }

        if (cardInfo) {
          cardResults.push(cardInfo);
        }
      }

      // Build the comment body with card details
      if (cardResults.length > 0) {
        commentBody += 'The following card files were modified:\n\n';

        for (const item of cardResults) {
          const fileUrl = `https://github.com/${repoFullName}/blob/${context.sha}/${item.file}`;

          if (item.card) {
            commentBody += `### ${item.card.name} (${item.card.id})\n`;
            commentBody += `- **File:** [${item.file}](${fileUrl})\n`;

            // Add image if available
            if (item.card.image) {
              commentBody += `- **Image:** \n\n<img src="${item.card.image}/high.webp" alt="${item.card.name}" width="240"/>\n\n`;
            }

            commentBody += `- **Set:** ${item.card.set?.name || 'Unknown'}\n`;
            commentBody += `- **Rarity:** ${item.card.rarity || 'Unknown'}\n\n`;
            commentBody += '---\n\n';
          } else if (item.error) {
            commentBody += `### ⚠️ Error processing ${item.file}\n`;
            commentBody += `- **File:** [${item.file}](${fileUrl})\n`;
            commentBody += `- **Error:** ${item.error}\n\n`;
            commentBody += '---\n\n';
          }
        }
      } else {
        commentBody += 'No recognized card files were changed in this PR.\n';
      }
    }

    // Store the generated comment for the workflow
    core.setOutput('pr_comment', commentBody);
    core.setOutput('files', changedFiles.join(','));
    core.setOutput('cardFiles', JSON.stringify(cardResults));

  } catch (error) {
    // Handle errors
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('An unknown error occurred');
    }
  }
}

run();
