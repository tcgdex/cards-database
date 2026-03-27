import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スカタンク",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "うしろげり" },
			damage: 40,
			cost: ["Darkness"],
		},
		{
			name: { ja: "スマッシュターン" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモン1匹と入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "スカンプー",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [435],
};

export default card;
