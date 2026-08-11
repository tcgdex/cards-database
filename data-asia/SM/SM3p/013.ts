import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "メラルバ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "太陽から 生まれたと いわれる。 進化するとき ツノから 噴き出した 炎で 全身を 包みこむ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのお" },
			damage: 30,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560171,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [636],
};

export default card;
