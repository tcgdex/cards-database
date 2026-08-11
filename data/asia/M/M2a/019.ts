import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒビキのマグカルゴ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "火山の 火口付近で 暮らす。 マグマが 冷えて 固まった 殻に 炎エネルギーを 蓄えている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "とけてながれる" },
			effect: {
				'ja-jp': "このポケモンにエネルギーがついていないなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ようがんバースト" },
			damage: "70×",
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				'ja-jp': "このポケモンについている[R]エネルギーを5枚までトラッシュし、その枚数×70ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861262,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861558,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 861559,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒビキのマグマッグ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [219],
};

export default card;
