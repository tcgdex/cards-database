import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘイガニ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "水質が 悪くても 平気なので ほかの 水ポケモンと エサの 奪い合いがなく どんどん 増えた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はさむ" },
			damage: 60,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863478,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [341],
};

export default card;
