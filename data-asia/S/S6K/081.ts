import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "キクコ",
	},

	illustrator: "NC Empire",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンにのっているダメカンを3個まで選び、相手のバトルポケモンにのせ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560982,
				tcgplayer: 569309,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
