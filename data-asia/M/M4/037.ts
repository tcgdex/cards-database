import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャオニクス",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トリックステップ" },
			damage: 80,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモン1匹に移す。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	evolveFrom: {
		ja: "ニャスパー",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [678],
};

export default card;
