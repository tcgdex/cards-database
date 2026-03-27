import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ケルディオ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきぬける" },
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "相手のベンチポケモン1匹にも20ダメージ。",
			},
		},
		{
			name: { ja: "エネリフレクト" },
			damage: 70,
			cost: ["Water", "Water"],
			effect: {
				ja: "このポケモンについているエネルギーを1個、自分のベンチポケモン1匹に移す。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [647],
};

export default card;
