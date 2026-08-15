import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンキャッチャー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900132,
				tcgplayer: 709252,
			},
		},
	],

	trainerType: "Item",
	rarity: "Mega Hyper Rare",
};

export default card;
