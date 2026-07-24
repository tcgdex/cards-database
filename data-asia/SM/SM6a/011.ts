import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "タッツー",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 40,
	types: ["Water"],

	description: {
		ja: "サンゴの 陰に 住処を 作る。 危険を 感じると 口から 真っ黒い 墨を 吐いて 逃げる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずとばし" },
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン1匹に、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559248,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [116],
};

export default card;
