import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "メラルバ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "５本のツノから 炎を 吹きだし 相手と 戦う。 その温度は 最大で ３０００度に 達する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "かえん" },
			damage: 50,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554778,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [636],
};

export default card;
