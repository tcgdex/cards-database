import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ニャース",
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "むかし アローラ地方の 王族と 贅沢な 暮らしを していたため エサの 選り好みが 激しい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ネコにこばん" },
			damage: 10,
			cost: [],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908253,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [52],
};

export default card;
