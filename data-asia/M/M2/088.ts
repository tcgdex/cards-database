import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "フライゴン",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	evolveFrom: {
		ja: "ビブラーバ",
	},

	attacks: [
		{
			name: { ja: "かまいたち" },
			damage: 130,
		}
	],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [330],
};

export default card;
