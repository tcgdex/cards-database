import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "イワンコ",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "よく なつくので 初心者に お勧めのポケモンと いわれるが 育つと 気性は 荒くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "いわおとし" },
			damage: 20,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561263,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [744],
};

export default card;
