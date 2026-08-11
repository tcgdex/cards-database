import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "マスタード いちげきのかた",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。自分の山札から「いちげき」のポケモンを1枚選び、ベンチに出す。そして山札を切る。その後、自分の山札を5枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538608,
				tcgplayer: 569030,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
