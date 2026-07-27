import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ベロベルト",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "舌が どこまで 伸びるのかの コンテストが 開催 されている。 現在の 最高記録は２５ｍ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ころがる" },
			damage: 40,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ベロベロらんぶ" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚トラッシュし、相手の山札を上から1枚トラッシュし、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557238,
			},
		},
	],

	evolveFrom: {
		ja: "ベロリンガ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [463],
};

export default card;
