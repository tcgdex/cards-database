import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エテボース",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "居心地の良い 木を 巡って ナゲツケサルのグループと 縄張りを 争っている。 結果は ５分だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "カムカムキャッチ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "バイバイスロー" },
			damage: "60×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の手札を2枚までトラッシュし、その枚数×60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554977,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "エイパム",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [424],
};

export default card;
