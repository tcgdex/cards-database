import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメイル",
	},

	illustrator: "Wataru Kawahara",
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

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [705],
};

export default card;
