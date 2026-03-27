import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ボクレー",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "うらみしんか" },
			effect: {
				ja: "自分の番に1回使える。自分の手札から、このポケモンに進化するカードを1枚選び、このポケモンの上に重ねる。この特性でしんかしたなら、このポケモンにダメージカウンターを2個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "つぶやく" },
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [708],
};

export default card;
