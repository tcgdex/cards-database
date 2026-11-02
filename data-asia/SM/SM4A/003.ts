import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "スピアー",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "両手と お尻にある ３本の 毒針で 相手を 刺して 刺して 刺しまくって 攻撃する。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "いきなりさす" },
			damage: 10,
			cost: ["Grass"],
			effect: {
				ja: "この番、このポケモンが「コクーン」から進化していたなら、相手のバトルポケモンをどくとマヒにする。",
			},
		},
		{
			name: { ja: "するどいはり" },
			damage: 60,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560248,
			},
		},
	],

	evolveFrom: {
		ja: "コクーン",
	},

	retreat: 0,
	rarity: "Uncommon",
	dexId: [15],
};

export default card;
