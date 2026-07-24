import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イワンコ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "小さいころは よく 懐く。 育つと 気性が 荒くなるが 主への 恩は 忘れない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おてパンチ" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863704,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [744],
};

export default card;
