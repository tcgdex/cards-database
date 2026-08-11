import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オンバーン",
	},

	illustrator: "Natsumi Miyanose",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'ja-jp': "月明かりすら ない 闇夜を 飛び 油断している 獲物を 襲う。 暗闇の 戦いでは 無敵だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こうそくいどう" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "きょうかスラッシュ" },
			damage: "70+",
			cost: ["Psychic", "Darkness"],
			effect: {
				'ja-jp': "このポケモンに「ポケモンのどうぐ」がついているなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861374,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861736,
			},
		},
		{
			type: "reverse",
			foil: "friendball",
			thirdParty: {
				cardmarket: 861737,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "オンバット",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [715],
};

export default card;
