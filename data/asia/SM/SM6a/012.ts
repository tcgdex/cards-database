import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "タッツー",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "サンゴの 陰に 住処を 作る。 危険を 感じると 口から 真っ黒い 墨を 吐いて 逃げる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ハイドロポンプ" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559249,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [116],
};

export default card;
