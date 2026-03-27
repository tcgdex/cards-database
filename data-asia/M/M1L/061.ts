import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "マチスのかけひき",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "Ask you opponent if they agree to have each player take a Prize card. If your opponent agrees, each take a Prize card. If they don't, you draw 4 cards.",
	},


	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
