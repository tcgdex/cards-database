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
			name: {
				ja: "ジオストーム",
			},
			damage: "30x",
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "自分のポケモン全員についているエネルギーの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],
	variants: [{ type: "holo" }],
	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [716],

	thirdParty: {
		cardmarket: 876941
	}
};

export default card;
