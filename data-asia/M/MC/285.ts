import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ピッピ",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "満月の 晩に 集まって 仲間と ダンス。 その周囲は 異常な 磁場に 包まれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ムーンキック" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863586,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [35],
};

export default card;
