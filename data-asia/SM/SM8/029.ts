import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒドイデ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "海底や 海岸を はいまわる。 サニーゴの 頭に 生える サンゴが 大好物だぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とげキャノン" },
			damage: "30×",
			cost: ["Water"],
			effect: {
				ja: "コインを2回投げ、オモテの数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558668,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [747],
};

export default card;
