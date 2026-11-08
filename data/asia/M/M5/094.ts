import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラランテスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はつらつカッター" },
			damage: "60+",
			cost: ["Grass"],
			effect: {
				'ja-jp': "この番に、このポケモンのHPを回復していたなら、200ダメージ追加。",
			},
		},
		{
			name: { ja: "リーフガード" },
			damage: 140,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888639,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カリキリ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [754],

	suffix: "EX",
};

export default card;
