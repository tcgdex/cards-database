import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アノクサ",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "風に吹かれて 荒野を 転がり 行き先は 自分でも わからない。 体が 濡れるのが 大嫌い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "トゲでさす" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863363,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [946],
};

export default card;
