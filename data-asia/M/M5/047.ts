import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "バルチャイ",
	},

	illustrator: "Shiburingaru",
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
			damage: 10,
			cost: ["Darkness"],
		},
		{
			name: { ja: "かぜおこし" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [629],

	thirdParty: {
		cardmarket: 888302,
	},
};

export default card;
