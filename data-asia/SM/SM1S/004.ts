import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "パラス",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "喰っても 喰っても 背中に 生えている キノコが ほとんど 栄養を 奪っていくのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561678,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [46],
};

export default card;
