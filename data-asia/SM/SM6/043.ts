import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "カメテテ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "体を 伸ばす 反動で 岩を 持ち上げて 歩く。 波打ち際で 流されてきた 海藻を 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶんたん" },
			damage: 10,
			cost: ["Fighting"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559588,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [688],
};

export default card;
