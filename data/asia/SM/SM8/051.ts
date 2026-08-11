import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドンファン",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "キバが 長くて 大きいほど 群れの中での ランクが 高い。 キバが 伸びるには 時間が かかる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "がんじょう" },
			effect: {
				'ja-jp': "このポケモンのHPがまんたんの状態で、このポケモンがワザのダメージを受けてきぜつするとき、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ローリングスピン" },
			damage: 70,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンの「ローリングスピン」のダメージは「+70」される。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558690,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゴマゾウ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [232],
};

export default card;
