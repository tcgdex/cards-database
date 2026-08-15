import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポカブ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "鼻の 穴から 炎を 吹く。 カゼを ひくと 炎ではなく 真っ黒な 煙に なってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひのこ" },
			damage: 40,
			cost: ["Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891824,
			},
		},
	],

	retreat: 2,
	rarity: "Promo",
	dexId: [498],
};

export default card;
