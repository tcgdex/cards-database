import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "バルチャイ",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "食べ盛りの 育ち盛り。 体の 成長に あわせて ガイコツを 何度も 履き替えるよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はばたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863776,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [629],
};

export default card;
