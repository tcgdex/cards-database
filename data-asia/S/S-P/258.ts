import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘイガニ",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "どんなに 水が 汚れた 川でも 適応して 増えていく タフな 生命力の 持ち主。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "クラブハンマー" },
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605833,
				tcgplayer: 597431,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [341],
};

export default card;
