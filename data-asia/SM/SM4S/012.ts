import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "オクタン",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "穴に 入りたがる 性質で 岩穴や ツボを 好み そこから 墨を 噴き出して 攻撃する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "すみをはく" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			},
		},
		{
			name: { ja: "スペシャルほう" },
			damage: "40+",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについている特殊エネルギーを、1個トラッシュする。その場合、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560324,
			},
		},
	],

	evolveFrom: {
		ja: "テッポウオ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [224],
};

export default card;
