import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "やまびこホーン",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "相手のトラッシュからたねポケモンを1枚選び、相手のベンチに出す。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560994,
				tcgplayer: 569322,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Secret Rare",
};

export default card;
