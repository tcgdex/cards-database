import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "マツバの確信",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。相手のベンチポケモンの数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752850,
				tcgplayer: 568403,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
