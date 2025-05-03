import core from '@actions/core'
import github from '@actions/github'
import TCGdex from '@tcgdex/sdk'

// Regular expressions to match file paths
const DATA_REGEX = /^data\/([^\/]+)\/([^\/]+)\/([^\/]+)\.ts$/;
const DATA_ASIA_REGEX = /^data-asia\/([^\/]+)\/([^\/]+)\/([^\/]+)\.ts$/;

// Helper function to sanitize card data to prevent circular references
function sanitizeCardData(card: any) {
  if (!card) return null;

  return {
    id: card.id,
    name: card.name,
    image: card.image,
    rarity: card.rarity,
    set: card.set ? { name: card.set.name } : { name: 'Unknown' }
  };
}

async function run() {
  try {
    // Get GitHub token and init client
    const token = core.getInput('github-token', { required: true });
    const octokit = github.getOctokit(token);
    const context = github.context;
    const { owner, repo } = context.repo;
    const repoFullName = `${owner}/${repo}`;

    // Get changed files
    let changedFiles: string[] = [];

    if (context.payload.pull_request) {
      const prNumber = context.payload.pull_request.number;
      const response = await octokit.rest.pulls.listFiles({
        owner, repo, pull_number: prNumber,
      });
      changedFiles = response.data.map(file => file.filename);
    } else if (context.payload.commits) {
      const filesSet = new Set<string>();
      for (const commit of context.payload.commits) {
        ['added', 'modified', 'removed'].forEach(type => {
          if (commit[type]) commit[type].forEach((file: string) => filesSet.add(file));
        });
      }
      changedFiles = Array.from(filesSet);
    }

    // Process card files
    const cardResults: Array<{file: string, card?: any, error?: string}> = [];

    for (const file of changedFiles) {
      console.log(` - ${file}`);
      let match = file.match(DATA_REGEX);
      let cardInfo = null;

      // Process according to file pattern
      if (match) {
        const tcgdex = new TCGdex();
        const [_, , setName, cardLocalId] = match;
        try {
          const set = (await tcgdex.set.get(setName!))!;
          const card = await tcgdex.card.get(`${set.id}-${cardLocalId}`);
          console.log(`   Card: ${card!.name} (${card!.id})`);
          cardInfo = { file, card: sanitizeCardData(card) };
        } catch (error) {
          console.log(`   Failed to fetch card: ${error instanceof Error ? error.message : 'Unknown error'}`);
          cardInfo = { file, error: 'Failed to fetch card information' };
        }
      } else if ((match = file.match(DATA_ASIA_REGEX))) {
        const [_, , setId, cardLocalId] = match;
        const tcgdex = new TCGdex('ja' as any); // Using 'ja' for Japanese
        try {
          const card = (await tcgdex.card.get(`${setId}-${cardLocalId}`))!;
          console.log(`   Card: ${card.name} (${card.id})`);
          cardInfo = { file, card: sanitizeCardData(card) };
        } catch (error) {
          console.log(`   Failed to fetch card: ${error instanceof Error ? error.message : 'Unknown error'}`);
          cardInfo = { file, error: 'Failed to fetch card information' };
        }
      }

      if (cardInfo) cardResults.push(cardInfo);
    }

    // Create the PR comment with a summary at the top
    const successfulCards = cardResults.filter(r => r.card).length;
    const errorCards = cardResults.filter(r => r.error).length;

    let commentBody = '## 🃏 Pokémon Card Changes\n\n';

    // Brief summary at the top
    if (cardResults.length > 0) {
      commentBody += `**Summary:** ${successfulCards} card${successfulCards !== 1 ? 's' : ''} processed successfully`;
      if (errorCards > 0) commentBody += `, ${errorCards} with errors`;
      commentBody += '.\n\n';

      // Detailed card information
      for (const item of cardResults) {
        const fileUrl = `https://github.com/${repoFullName}/blob/${context.sha}/${item.file}`;

        if (item.card) {
          commentBody += `<details><summary><strong>${item.card.name}</strong> (${item.card.id})</summary>\n\n`;

          // Display image more prominently
          if (item.card.image) {
            commentBody += `<div align="center">\n<img src="${item.card.image}/high.webp" alt="${item.card.name}" width="300"/>\n</div>\n\n`;
          }

          commentBody += `**File:** [${item.file}](${fileUrl})  \n`;
          commentBody += `**Set:** ${item.card.set?.name || 'Unknown'}  \n`;
          commentBody += `**Rarity:** ${item.card.rarity || 'Unknown'}\n\n`;
          commentBody += '</details>\n\n';
        } else if (item.error) {
          commentBody += `<details><summary>⚠️ <strong>Error processing ${item.file.split('/').pop()}</strong></summary>\n\n`;
          commentBody += `**File:** [${item.file}](${fileUrl})  \n`;
          commentBody += `**Error:** ${item.error}\n\n`;
          commentBody += '</details>\n\n';
        }
      }
    } else if (changedFiles.length > 0) {
      commentBody += 'No recognized card files were changed in this PR.\n';
    } else {
      commentBody += 'No files were changed in this PR.\n';
    }

    // Post or update the comment in the PR if in a PR context
    if (context.payload.pull_request) {
      const prNumber = context.payload.pull_request.number;

      // Get all comments on the PR
      const commentsResponse = await octokit.rest.issues.listComments({
        owner,
        repo,
        issue_number: prNumber,
      });

      // Look for our bot's comment with the Pokémon Card Changes header
      const botLogin = 'github-actions[bot]'; // GitHub Actions bot username
      const existingComment = commentsResponse.data.find(comment =>
        comment.user?.login === botLogin &&
        comment.body?.includes('## 🃏 Pokémon Card Changes')
      );

      if (existingComment) {
        // Update the existing comment
        await octokit.rest.issues.updateComment({
          owner,
          repo,
          comment_id: existingComment.id,
          body: commentBody
        });
        console.log(`Updated existing comment #${existingComment.id} on PR #${prNumber}`);
      } else {
        // Create a new comment if none exists
        await octokit.rest.issues.createComment({
          owner,
          repo,
          issue_number: prNumber,
          body: commentBody
        });
        console.log(`Posted new comment to PR #${prNumber}`);
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
