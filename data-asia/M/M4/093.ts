import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメイル",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ねばりつく" },
			damage: 50,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは逃げられない。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	evolveFrom: {
		ja: "ヌメラ",
	},

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [705],
};

export default card;
