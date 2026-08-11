import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "モトトカゲ",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "人を 乗せて 時速１２０キロで 疾走する。 人の 体温で 背中が 温まり 元気になる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぽのムチ" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "スピードアタック" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863929,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [967],
};

export default card;
