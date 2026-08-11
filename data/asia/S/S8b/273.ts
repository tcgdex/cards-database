import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マスタード れんげきのかた",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。自分のトラッシュから「れんげき」のポケモンを1枚選び、ベンチに出す。その後、自分の山札を5枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587071,
				tcgplayer: 571524,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Ultra Rare",
};

export default card;
