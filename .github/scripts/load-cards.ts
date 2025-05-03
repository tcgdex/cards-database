import core from "@actions/core";
import github from "@actions/github";
import TCGdex from "@tcgdex/sdk";

// Types
type CardData = {
	id: string;
	name: string;
	image?: string;
	rarity?: string;
	set: { name: string };
	hasImage: boolean;
};

type CardResult = {
	file: string;
	card?: CardData;
	error?: string;
	isAsian?: boolean;
	usedLanguage?: string;
	hasImage?: boolean;
	status?: "added" | "removed" | "modified";
};

type CardFetchResult = {
	card: any;
	usedLanguage: string;
	hasImage: boolean;
} | null;

// Constants
const DATA_REGEX = /^data\/([^\/]+)\/([^\/]+)\/([^\/]+)\.ts$/;
const DATA_ASIA_REGEX = /^data-asia\/([^\/]+)\/([^\/]+)\/([^\/]+)\.ts$/;

const INTERNATIONAL_LANGUAGES = ["en", "fr", "es", "es-mx", "it", "pt", "pt-br", "pt-pt", "de", "nl", "pl", "ru"];
const ASIAN_LANGUAGES = ["ja", "ko", "zh-tw", "id", "th", "zh-cn"];

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

// Helper function to sanitize card data
function sanitizeCardData(card: any): CardData | undefined {
	if (!card) return undefined;

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
): Promise<CardFetchResult> {
	let lastError: Error | unknown = null;
	const languagesToTry = [primaryLanguage, ...allLanguages.filter((lang) => lang !== primaryLanguage)];
	let foundWithoutImage: { lang: string; card: any } | undefined;

	for (const lang of languagesToTry) {
		try {
			console.log(`   Trying language: ${lang}`);
			const tcgdex = new TCGdex(lang as any);
			let card;

			if (!isAsianRegion) {
				const set = await tcgdex.set.get(setIdentifier);
				card = await tcgdex.card.get(`${set!.id}-${cardLocalId}`);
			} else {
				card = await tcgdex.card.get(`${setIdentifier}-${cardLocalId}`);
			}

			if (card && !card.image) {
				foundWithoutImage = { lang, card };
				continue;
			}

			if (card && card.image) {
				console.log(`   Card: ${card.name} (${card.id}) - Found using language: ${lang}`);
				return { card, usedLanguage: lang, hasImage: true };
			}
		} catch (error) {
			lastError = error;
			console.log(`   Failed with language ${lang}: ${error instanceof Error ? error.message : "Unknown error"}`);
		}
	}

	if (foundWithoutImage) {
		console.log(`   Card: ${foundWithoutImage.card.name} (${foundWithoutImage.card.id}) - Found without image`);
		return { card: foundWithoutImage.card, usedLanguage: foundWithoutImage.lang, hasImage: false };
	}

	console.log(
		`   All languages failed. Last error: ${lastError instanceof Error ? lastError.message : "Unknown error"}`,
	);
	return null;
}

// Get changed files from GitHub
async function getChangedFiles(
	context: typeof github.context,
	octokit: ReturnType<typeof github.getOctokit>,
): Promise<{ filename: string; status: string }[]> {
	if (context.payload.pull_request) {
		const { owner, repo } = context.repo;
		const prNumber = context.payload.pull_request.number;
		const response = await octokit.rest.pulls.listFiles({
			owner,
			repo,
			pull_number: prNumber,
		});
		return response.data.map((file) => ({ filename: file.filename, status: file.status }));
	} else if (context.payload.commits) {
		const files: { filename: string; status: string }[] = [];
		for (const commit of context.payload.commits) {
			if (commit.added) {
				commit.added.forEach((file: string) => files.push({ filename: file, status: "added" }));
			}
			if (commit.modified) {
				commit.modified.forEach((file: string) => files.push({ filename: file, status: "modified" }));
			}
			if (commit.removed) {
				commit.removed.forEach((file: string) => files.push({ filename: file, status: "removed" }));
			}
		}
		return files;
	}
	return [];
}

// Process a single card file
async function processCardFile(file: { filename: string; status: string }): Promise<CardResult | null> {
	console.log(` - ${file.filename} (${file.status})`);
	let match = file.filename.match(DATA_REGEX);
	const isCardFile = !!(match || file.filename.match(DATA_ASIA_REGEX));

	if (!isCardFile) {
		return null;
	}

	// For added files, just return the file info without fetching
	if (file.status === "added") {
		return {
			file: file.filename,
			status: "added",
		};
	}

	// For removed files, just return the file info without fetching
	if (file.status === "removed") {
		return {
			file: file.filename,
			status: "removed",
		};
	}

	// Only process modified files normally
	if (match) {
		const [_, , setName, cardLocalId] = match;
		const result = await tryFetchCardWithFallback(setName!, cardLocalId!, "en", INTERNATIONAL_LANGUAGES, false);

		if (result) {
			return {
				file: file.filename,
				card: sanitizeCardData(result.card),
				isAsian: false,
				usedLanguage: result.usedLanguage,
				hasImage: result.hasImage,
				status: "modified",
			};
		} else {
			return {
				file: file.filename,
				error: "Failed to fetch card information in all available languages",
				isAsian: false,
				status: "modified",
			};
		}
	}

	match = file.filename.match(DATA_ASIA_REGEX);
	if (match) {
		const [_, , setId, cardLocalId] = match;
		const result = await tryFetchCardWithFallback(setId!, cardLocalId!, "ja", ASIAN_LANGUAGES, true);

		if (result) {
			return {
				file: file.filename,
				card: sanitizeCardData(result.card),
				isAsian: true,
				usedLanguage: result.usedLanguage,
				hasImage: result.hasImage,
				status: "modified",
			};
		} else {
			return {
				file: file.filename,
				error: "Failed to fetch card information in all available languages",
				isAsian: true,
				status: "modified",
			};
		}
	}

	return null;
}

// Generate comment body for PR
function generateCommentBody(
	cardResults: CardResult[],
	changedFiles: { filename: string; status: string }[],
	repoFullName: string,
	contextSha: string,
): string {
	const newCards = cardResults.filter((r) => r.status === "added").length;
	const deletedCards = cardResults.filter((r) => r.status === "removed").length;
	const modifiedCards = cardResults.filter((r) => r.status === "modified" && r.card).length;
	const errorCards = cardResults.filter((r) => r.status === "modified" && r.error).length;
	const cardsWithoutImages = cardResults.filter((r) => r.card && !r.hasImage).length;

	let commentBody = `## 🃏 ${cardResults.length} Card${cardResults.length !== 1 ? "s" : ""} Changed\n\n`;

	if (cardResults.length === 0) {
		commentBody +=
			changedFiles.length > 0
				? "No recognized card files were changed in this PR.\n"
				: "No files were changed in this PR.\n";
		return commentBody;
	}

	// Add summary
	commentBody += `**Details:** `;

	const details = [];
	if (newCards > 0) {
		details.push(`${newCards} new`);
	}
	if (deletedCards > 0) {
		details.push(`${deletedCards} deleted`);
	}
	if (modifiedCards > 0) {
		details.push(`${modifiedCards} modified`);
	}
	if (errorCards > 0) {
		details.push(`${errorCards} with errors`);
	}
	if (cardsWithoutImages > 0) {
		details.push(`${cardsWithoutImages} without images`);
	}

	commentBody += details.join(", ") + "\n\n";

	// Generate detailed card information
	for (const item of cardResults) {
		const fileUrl = `https://github.com/${repoFullName}/blob/${contextSha}/${item.file}`;
		const fileName = item.file.split("/").pop();

		if (item.status === "added") {
			commentBody += `<details><summary>➕ <strong>New card: ${fileName}</strong></summary>\n\n`;
			commentBody += `**File:** [${encodeURI(item.file)}](${encodeURI(fileUrl)})  \n\n`;
			commentBody += "</details>\n\n";
		} else if (item.status === "removed") {
			commentBody += `<details><summary>🗑️ <strong>Deleted card: ${fileName}</strong></summary>\n\n`;
			commentBody += `**File:** [${encodeURI(item.file)}](${encodeURI(fileUrl)})  \n\n`;
			commentBody += "</details>\n\n";
		} else if (item.card) {
			const langInfo = item.usedLanguage ? ` (found using ${item.usedLanguage})` : "";
			const imageStatus = !item.hasImage ? ` <em>(no images)</em>` : "";

			commentBody += `<details><summary><strong>${item.card.name}</strong> (${item.card.id})${langInfo}${imageStatus}</summary>\n\n`;

			if (item.card.image) {
				const languages = item.isAsian ? ASIAN_LANGUAGES : INTERNATIONAL_LANGUAGES;
				commentBody += renderCardImageTable(item.card, languages);
			} else {
				commentBody += `<p align="center"><em>No images available for this card</em></p>\n\n`;
			}

			commentBody += `**File:** [${item.file}](${fileUrl})  \n`;
			commentBody += `**Set:** ${item.card.set?.name || "Unknown"}  \n`;
			commentBody += `**Rarity:** ${item.card.rarity || "Unknown"}\n\n`;
			commentBody += "</details>\n\n";
		} else if (item.error) {
			commentBody += `<details><summary>⚠️ <strong>Error processing ${fileName}</strong></summary>\n\n`;
			commentBody += `**File:** [${encodeURI(item.file)}](${encodeURI(fileUrl)})  \n\n`;
			commentBody += `**Error:** ${item.error}\n\n`;
			commentBody += "</details>\n\n";
		}
	}

	return commentBody;
}

// Helper to render the card image table
function renderCardImageTable(card: CardData, languages: string[]): string {
	let tableMarkdown = `<div align="center">\n\n`;
	tableMarkdown += `| Language | Language | Language |\n`;
	tableMarkdown += `|:-------:|:-------:|:-------:|\n`;

	for (let i = 0; i < languages.length; i += 3) {
		tableMarkdown += `|`;

		for (let j = 0; j < 3; j++) {
			const langIndex = i + j;
			if (langIndex < languages.length) {
				const lang = languages[langIndex];
				const langName = LANGUAGE_NAMES[lang as keyof typeof LANGUAGE_NAMES] || lang;
				const localizedImageUrl = card.image!.replace(/\/[a-z]{2}(-[a-z]{2})?\//, `/${lang}/`);
				tableMarkdown += ` <strong>${langName} (${lang})</strong><br><img src="${localizedImageUrl}/high.webp" alt="${card.name} (${langName})" width="200"/> |`;
			} else {
				tableMarkdown += ` |`;
			}
		}
		tableMarkdown += `\n`;
	}

	tableMarkdown += `\n</div>\n\n`;
	return tableMarkdown;
}

// Post or update PR comment
async function postOrUpdatePRComment(
	octokit: ReturnType<typeof github.getOctokit>,
	owner: string,
	repo: string,
	prNumber: number,
	commentBody: string,
): Promise<void> {
	// Get authenticated user info to identify our bot
	const { data: authenticatedUser } = await octokit.rest.users.getAuthenticated();
	console.log(`Authenticated as user: ${authenticatedUser.login}`);

	const commentsResponse = await octokit.rest.issues.listComments({
		owner,
		repo,
		issue_number: prNumber,
	});

	// Look for existing comments from our authenticated bot user
	const existingComment = commentsResponse.data.find(
		(comment) => comment.user?.login === authenticatedUser.login && comment.body?.includes("## 🃏"),
	);

	if (existingComment) {
		await octokit.rest.issues.updateComment({
			owner,
			repo,
			comment_id: existingComment.id,
			body: commentBody,
		});
		console.log(`Updated existing comment #${existingComment.id} on PR #${prNumber} as ${authenticatedUser.login}`);
	} else {
		await octokit.rest.issues.createComment({
			owner,
			repo,
			issue_number: prNumber,
			body: commentBody,
		});
		console.log(`Posted new comment to PR #${prNumber} as ${authenticatedUser.login}`);
	}
}

async function run() {
	try {
		// Initialize GitHub client
		const token = core.getInput("github-token", { required: true });
		const octokit = github.getOctokit(token);
		const context = github.context;
		const { owner, repo } = context.repo;
		const repoFullName = `${owner}/${repo}`;

		// Get changed files
		const changedFiles = await getChangedFiles(context, octokit);

		// Process card files
		const cardResults: CardResult[] = [];
		for (const file of changedFiles) {
			const result = await processCardFile(file);
			if (result) cardResults.push(result);
		}

		// Generate comment body
		const commentBody = generateCommentBody(cardResults, changedFiles, repoFullName, context.sha);

		// Post or update the comment in the PR
		if (context.payload.pull_request) {
			const prNumber = context.payload.pull_request.number;
			await postOrUpdatePRComment(octokit, owner, repo, prNumber, commentBody);
		}

		// Store the generated comment for the workflow
		core.setOutput("pr_comment", commentBody);
		core.setOutput("files", changedFiles.map(f => f.filename).join(","));
		core.setOutput("cardFiles", JSON.stringify(cardResults));
	} catch (error) {
		if (error instanceof Error) {
			core.setFailed(error.message);
		} else {
			core.setFailed("An unknown error occurred");
		}
	}
}

run();
