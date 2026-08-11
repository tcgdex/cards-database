import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴース",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "廃墟に なった 建物に 怪しい光が 灯っていたら そこに ゴースが 潜んでいる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふきつなめ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン1匹に、ダメカンを1個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560332,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [92],
};

export default card;
