import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアス",
	},

	illustrator: "YASHIRO Nanaco",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "頭の ツノが 七色に 輝くとき 永遠の 命を 分け与えると いわれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ジオストーム" },
			damage: "30×",
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "自分のポケモン全員についている[P]エネルギーの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877318,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [716],
};

export default card;
