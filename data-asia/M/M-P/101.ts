import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギダネ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "生まれたときから 背中に 植物の タネが あって 少しずつ 大きく 育つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やどりぎのタネ" },
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891799,
			},
		},
	],

	retreat: 2,
	rarity: "Promo",
	dexId: [1],
};

export default card;
