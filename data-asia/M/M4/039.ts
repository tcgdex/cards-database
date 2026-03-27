import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "のろいのねっこ" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンの持ち主は手札からエネルギーをつけられない。",
			},
		},
		{
			name: { ja: "オーバーペイン" },
			damage: "60+",
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにのっているダメージカウンター1個につき「10」多くなる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	evolveFrom: {
		ja: "ボクレー",
	},

	variants: [{ type: "holo" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 3,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [709],
};

export default card;
