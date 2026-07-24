import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "コクーン",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "自分では ほとんど 動けないが 危ないときは 硬くなって 身を守っているようだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "くさぶとん" },
			effect: {
				ja: "このポケモンに[草]エネルギーがついているなら、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "むしくい" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558282,
			},
		},
	],

	evolveFrom: {
		ja: "ビードル",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [14],
};

export default card;
