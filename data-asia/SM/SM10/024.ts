import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "パウワウ",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "冷たい 海にしか 棲まないと 考えられてきた。 アローラに 現れる 理由は ナゾ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つのでつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557379,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [86],
};

export default card;
