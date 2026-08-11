import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラス",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "人や ポケモンを 背中に 乗せて 海を 渡ることが 大好き。 人の 言葉を 理解できる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 20,
			cost: ["Water"],
		},
		{
			name: { ja: "なみのり" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863455,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [131],
};

export default card;
