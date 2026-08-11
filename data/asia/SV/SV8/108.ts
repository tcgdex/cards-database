import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "メラルバ",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "大昔は 太陽の遣い と 崇められたが しばしば 山火事を 起こすこともあり 煙たがられた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ひをはく" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793572,
				tcgplayer: 587726,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [636],
};

export default card;
