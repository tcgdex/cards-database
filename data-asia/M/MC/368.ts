import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アサナン",
	},

	illustrator: "Natsumi Miyanose",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "瞑想で 精神エネルギーを 高めて 空中に 浮かぶ。 １日に １個 木の実を 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ビンタ" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "キック" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863670,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [307],
};

export default card;
