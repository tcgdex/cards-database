import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘイガニ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "どんなに 水が 汚れた 川でも 適応して 増えていく タフな 生命力の 持ち主。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "クラブハンマー" },
			damage: 30,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560325,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [341],
};

export default card;
