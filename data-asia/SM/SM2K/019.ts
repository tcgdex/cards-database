import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "バイバニラ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "２つの頭 それぞれに 脳があり 両者の 意見が 一致すると 猛吹雪を 吐いて 敵を 襲う。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "あられ" },
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "フローズンブレス" },
			damage: 80,
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "のぞむなら、このポケモンについている[水]エネルギーを、2個トラッシュする。その場合、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561485,
			},
		},
	],

	evolveFrom: {
		ja: "バニリッチ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [584],
};

export default card;
