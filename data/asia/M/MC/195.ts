import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ケイコウオ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "ピンク色の 皮の 部分は 太陽光を 溜めて 光る。 カモフラージュのためと いわれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うちみず" },
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863491,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [456],
};

export default card;
