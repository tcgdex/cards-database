import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "危険な廃墟ビル",
	},

	illustrator: "imoniii",
	category: "Trainer",

	effect: {
		ja: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.",
	},


	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
