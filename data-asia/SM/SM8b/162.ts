import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "モクロー",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "警戒心が 強い。 昼は 光合成で 力を 溜めて 夜になったら 活動開始。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "このは" },
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551306,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [722],
};

export default card;
