import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "オクタン",
	},

	illustrator: "Matazo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "すみふんしゃ" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンの持ち主がワザを使おうとするとき、コインを2回投げ、2回ともウラなら、そのワザは失敗。",
			},
		},
		{
			name: { ja: "あばれまわる" },
			damage: 120,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "このポケモンはこんらんになる。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "テッポウオ",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [224],
};

export default card;
