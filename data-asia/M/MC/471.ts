import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "コマタナ",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "全身が 刃物の ポケモン。 戦いで 刃こぼれすると 河原の 石で 刃を とぐ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきさす" },
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863773,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [624],
};

export default card;
