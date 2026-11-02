import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フラワーストーム" },
			damage: "30×",
			cost: ["Grass", "Grass"],
			effect: {
				ja: "自分の場のポケモンについている基本エネルギーの数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 550516,
			},
		},
	],

	retreat: 0,
	rarity: "Rare Holo",
	dexId: [492],
};

export default card;
