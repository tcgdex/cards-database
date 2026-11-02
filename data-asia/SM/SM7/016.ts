import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "アチャモ",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "体内で 炎が 燃えているので 抱きしめると とても 温かい。 １０００度の 火の玉を 飛ばす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つつく" },
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: { ja: "ひだね" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558977,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [255],
};

export default card;
