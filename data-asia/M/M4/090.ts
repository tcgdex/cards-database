import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ネンドール",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいかこうせん" },
			damage: 50,
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンが進化していたなら、そのポケモンの一番上の進化カードを手札に戻す。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "ヤジロン",
	},

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [344],
};

export default card;
