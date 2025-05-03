import core from "@actions/core";
import github from "@actions/github";
import TCGdex from "@tcgdex/sdk";

// Regular expressions to match file paths
const DATA_REGEX = /^data\/([^\/]+)\/([^\/]+)\/([^\/]+)\.ts$/;
const DATA_ASIA_REGEX = /^data-asia\/([^\/]+)\/([^\/]+)\/([^\/]+)\.ts$/;

// Languages supported
const INTERNATIONAL_LANGUAGES = ["en", "fr", "es", "es-mx", "it", "pt", "pt-br", "pt-pt", "de", "nl", "pl", "ru"];
const ASIAN_LANGUAGES = ["ja", "ko", "zh-tw", "id", "th", "zh-cn"];

// Language names mapping
const LANGUAGE_NAMES: Record<string, string> = {
	en: "English",
	fr: "French",
	es: "Spanish",
	"es-mx": "Spanish (Mexico)",
	it: "Italian",
	pt: "Portuguese",
	"pt-br": "Portuguese (Brazil)",
	"pt-pt": "Portuguese (Portugal)",
	de: "German",
	nl: "Dutch",
	pl: "Polish",
	ru: "Russian",
	ja: "Japanese",
	ko: "Korean",
	"zh-tw": "Chinese (Taiwan)",
	id: "Indonesian",
	th: "Thai",
	"zh-cn": "Chinese (China)",
};

// Helper function to sanitize card data to prevent circular references
function sanitizeCardData(card: any) {
	if (!card) return null;

	return {
		id: card.id,
		name: card.name,
		image: card.image,
		rarity: card.rarity,
		set: card.set ? { name: card.set.name } : { name: "Unknown" },
		hasImage: !!card.image,
	};
}

// Helper function to try fetching a card with fallback to other languages
async function tryFetchCardWithFallback(
	setIdentifier: string,
	cardLocalId: string,
	primaryLanguage: string,
	allLanguages: string[],
	isAsianRegion: boolean,
): Promise<{ card: any; usedLanguage: string; hasImage: boolean } | null> {
	let lastError: any = null;

	// Try primary language first, then others
	const languagesToTry = [primaryLanguage, ...allLanguages.filter((lang) => lang !== primaryLanguage)];
	let foundWithoutImage: { lang: string; card: any } | undefined;

	for (const lang of languagesToTry) {
		try {
			console.log(`   Trying language: ${lang}`);
			const tcgdex = new TCGdex(lang as any);
			let card;

			if (!isAsianRegion) {
				// For international cards, we need to get the set ID first
				const set = (await tcgdex.set.get(setIdentifier))!;
				card = await tcgdex.card.get(`${set.id}-${cardLocalId}`);
			} else {
				// For Asian cards, we already have the set ID
				card = await tcgdex.card.get(`${setIdentifier}-${cardLocalId}`);
			}

			if (card && !card.image) {
				foundWithoutImage = { lang, card };
			}

			if (card && card.image) {
				console.log(`   Card: ${card.name} (${card.id}) - Found using language: ${lang}`);
				return { card, usedLanguage: lang, hasImage: true };
			}
		} catch (error) {
			lastError = error;
			console.log(`   Failed with language ${lang}: ${error instanceof Error ? error.message : "Unknown error"}`);
			// Continue to next language
		}
	}

	if (foundWithoutImage) {
		console.log(`   Card: ${foundWithoutImage.card.name} (${foundWithoutImage.card.id}) - Found without image`);
		return { card: foundWithoutImage.card, usedLanguage: foundWithoutImage.lang, hasImage: false };
	}

	// If we get here, all languages failed
	console.log(
		`   All languages failed. Last error: ${lastError instanceof Error ? lastError.message : "Unknown error"}`,
	);
	return null;
}

async function run() {
	try {
		// Get GitHub token and init client
		const token = core.getInput("github-token", { required: true });
		const octokit = github.getOctokit(token);
		const context = github.context;
		const { owner, repo } = context.repo;
		const repoFullName = `${owner}/${repo}`;

		// Get changed files
		let changedFiles: string[] = [];

		if (context.payload.pull_request) {
			const prNumber = context.payload.pull_request.number;
			const response = await octokit.rest.pulls.listFiles({
				owner,
				repo,
				pull_number: prNumber,
			});
			changedFiles = response.data.map((file) => file.filename);
		} else if (context.payload.commits) {
			const filesSet = new Set<string>();
			for (const commit of context.payload.commits) {
				["added", "modified", "removed"].forEach((type) => {
					if (commit[type]) commit[type].forEach((file: string) => filesSet.add(file));
				});
			}
			changedFiles = Array.from(filesSet);
		}

		// Process card files
		const cardResults: Array<{
			file: string;
			card?: any;
			error?: string;
			isAsian?: boolean;
			usedLanguage?: string;
			hasImage?: boolean;
		}> = [];

		for (const file of changedFiles) {
			console.log(` - ${file}`);
			let match = file.match(DATA_REGEX);
			let cardInfo = null;

			// Process according to file pattern
			if (match) {
				const [_, , setName, cardLocalId] = match;
				const result = await tryFetchCardWithFallback(
					setName!,
					cardLocalId!,
					"en", // Primary language for international cards
					INTERNATIONAL_LANGUAGES,
					false,
				);

				if (result) {
					cardInfo = {
						file,
						card: sanitizeCardData(result.card),
						isAsian: false,
						usedLanguage: result.usedLanguage,
						hasImage: result.hasImage,
					};
				} else {
					cardInfo = {
						file,
						error: "Failed to fetch card information in all available languages",
						isAsian: false,
					};
				}
			} else if ((match = file.match(DATA_ASIA_REGEX))) {
				const [_, , setId, cardLocalId] = match;
				const result = await tryFetchCardWithFallback(
					setId!,
					cardLocalId!,
					"ja", // Primary language for Asian cards
					ASIAN_LANGUAGES,
					true,
				);

				if (result) {
					cardInfo = {
						file,
						card: sanitizeCardData(result.card),
						isAsian: true,
						usedLanguage: result.usedLanguage,
						hasImage: result.hasImage,
					};
				} else {
					cardInfo = {
						file,
						error: "Failed to fetch card information in all available languages",
						isAsian: true,
					};
				}
			}

			if (cardInfo) cardResults.push(cardInfo);
		}

		// Create the PR comment with a summary at the top
		const successfulCards = cardResults.filter((r) => r.card).length;
		const errorCards = cardResults.filter((r) => r.error).length;
		const cardsWithoutImages = cardResults.filter((r) => r.card && !r.hasImage).length;

		let commentBody = `## 🃏 ${successfulCards + errorCards} Card${successfulCards + errorCards !== 1 ? "s" : ""} Changed\n\n`;

		// Brief summary at the top
		if (cardResults.length > 0) {
			// Add a more detailed summary if there are errors or cards without images
			if (errorCards > 0 || cardsWithoutImages > 0) {
				commentBody += `**Details:** ${successfulCards} processed successfully`;
				if (cardsWithoutImages > 0) {
					commentBody += ` (${cardsWithoutImages} without images)`;
				}
				if (errorCards > 0) {
					commentBody += `, ${errorCards} with errors`;
				}
				commentBody += `\n\n`;
			}

			// Detailed card information
			for (const item of cardResults) {
				const fileUrl = `https://github.com/${repoFullName}/blob/${context.sha}/${item.file}`;

				if (item.card) {
					let langInfo = item.usedLanguage ? ` (found using ${item.usedLanguage})` : "";
					if (!item.hasImage) {
						langInfo += ` <em>(no images)</em>`;
					}
					commentBody += `<details><summary><strong>${item.card.name}</strong> (${item.card.id})${langInfo}</summary>\n\n`;

					// Display image more prominently in multiple languages
					if (item.card.image) {
						// Show images in different languages
						const languages = item.isAsian ? ASIAN_LANGUAGES : INTERNATIONAL_LANGUAGES;

						commentBody += `<div align="center">\n\n`;

						// Create a table with languages in 3 columns
						commentBody += `| Language | Language | Language |\n`;
						commentBody += `|:-------:|:-------:|:-------:|\n`;

						// Process languages in groups of 3
						for (let i = 0; i < languages.length; i += 3) {
							commentBody += `|`;

							// Loop through each column in the current row
							for (let j = 0; j < 3; j++) {
								const langIndex = i + j;

								// Check if we still have languages to process
								if (langIndex < languages.length) {
									const lang = languages[langIndex];
									const langName = LANGUAGE_NAMES[lang as 'en'] || lang;
									const localizedImageUrl = item.card.image.replace(
										/\/[a-z]{2}(-[a-z]{2})?\//,
										`/${lang}/`,
									);
									commentBody += ` <strong>${langName} (${lang})</strong><br><img src="${localizedImageUrl}/high.webp" alt="${item.card.name} (${langName})" width="200"/> |`;
								} else {
									// Empty cell if no more languages
									commentBody += ` |`;
								}
							}
							commentBody += `\n`;
						}

						commentBody += `\n</div>\n\n`;
					} else {
						commentBody += `<p align="center"><em>No images available for this card</em></p>\n\n`;
					}

					commentBody += `**File:** [${item.file}](${fileUrl})  \n`;
					commentBody += `**Set:** ${item.card.set?.name || "Unknown"}  \n`;
					commentBody += `**Rarity:** ${item.card.rarity || "Unknown"}\n\n`;
					commentBody += "</details>\n\n";
				} else if (item.error) {
					commentBody += `<details><summary>⚠️ <strong>Error processing ${item.file.split("/").pop()}</strong></summary>\n\n`;
					commentBody += `**File:** [${item.file}](${fileUrl})  \n`;
					commentBody += `**Error:** ${item.error}\n\n`;
					commentBody += "</details>\n\n";
				}
			}
		} else if (changedFiles.length > 0) {
			commentBody += "No recognized card files were changed in this PR.\n";
		} else {
			commentBody += "No files were changed in this PR.\n";
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
			const botLogin = "github-actions[bot]"; // GitHub Actions bot username
			const existingComment = commentsResponse.data.find(
				(comment) => comment.user?.login === botLogin && comment.body?.includes("## 🃏"),
			);

			if (existingComment) {
				// Update the existing comment
				await octokit.rest.issues.updateComment({
					owner,
					repo,
					comment_id: existingComment.id,
					body: commentBody,
				});
				console.log(`Updated existing comment #${existingComment.id} on PR #${prNumber}`);
			} else {
				// Create a new comment if none exists
				await octokit.rest.issues.createComment({
					owner,
					repo,
					issue_number: prNumber,
					body: commentBody,
				});
				console.log(`Posted new comment to PR #${prNumber}`);
			}
		}

		// Store the generated comment for the workflow
		core.setOutput("pr_comment", commentBody);
		core.setOutput("files", changedFiles.join(","));
		core.setOutput("cardFiles", JSON.stringify(cardResults));
	} catch (error) {
		// Handle errors
		if (error instanceof Error) {
			core.setFailed(error.message);
		} else {
			core.setFailed("An unknown error occurred");
		}
	}
}

run();
