import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエのきもち",
	},

	illustrator: "satoma",
	category: "Trainer",

	effect: {
		ja: "Shuffle your hand into your deck. Then, draw 6 cards. If you have 6 prize cards remaining, draw 8 cards instead.",
	},


	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
