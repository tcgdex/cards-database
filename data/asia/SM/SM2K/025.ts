import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴチム",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "リボンのような 触角で サイコパワーを 増幅させる。 なにかを じっと 見つめている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なげキッス" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン1匹に、ダメカンを1個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561491,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [574],
};

export default card;
