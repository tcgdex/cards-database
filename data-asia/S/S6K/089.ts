import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "キクコ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンにのっているダメカンを3個まで選び、相手のバトルポケモンにのせ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560989,
				tcgplayer: 569317,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
