import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "マスキッパ",
	},

	illustrator: "Heisuke Kitazawa",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まるかじり" },
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンの逃げるコスト「エネルギー1個」につき「80」多くなる。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [455],
};

export default card;
