import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ラクライ",
	},

	illustrator: "Narano",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "静電気を 体毛に 溜める。 空気の 乾燥した 季節には 全身から 火花を 散らす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うしろげり" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "プチボルト" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863538,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [309],
};

export default card;
