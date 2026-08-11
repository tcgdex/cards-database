import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニョロモ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "危険なのに 陸に 上がりたがる。 まだ よちよち歩き なので 敵に 見つかると 慌てて 水の中へ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札にあるたねポケモンを1枚、ベンチに出す。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557376,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [60],
};

export default card;
