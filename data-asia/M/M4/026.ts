import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "グソクムシャ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きゅうしょぎり" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "このワザでバトルポケモンがきぜつさせられたとき、次の相手の番、このポケモンはワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "そこぢから" },
			damage: 150,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザを使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "コソクムシ",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [768],
};

export default card;
