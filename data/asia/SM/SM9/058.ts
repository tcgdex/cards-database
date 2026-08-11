import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "カブト",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "３億年前に 栄えた ポケモン。 とある 地方では 今でも まれに 生きた 姿が 見られると 言う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こうらでぶつかる" },
			damage: 40,
			cost: ["Fighting"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558384,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [140],
};

export default card;
