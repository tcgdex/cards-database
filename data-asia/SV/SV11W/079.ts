import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギー回収",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから基本エネルギーを2枚まで選び、相手に見せて、手札に加える。",
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",
	thirdParty: {
		cardmarket: 829082,
		tcgplayer: 636632,
	},
};

export default card;
