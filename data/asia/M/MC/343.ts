import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ベロバー",
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "群れを 作って 暮らし おたがいに 悪戯や 嫌がらせを 仕掛けて その腕を 磨いているぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 20,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863645,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [859],
};

export default card;
