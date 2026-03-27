import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "マフォクシー",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フレアマジック" },
			effect: {
				ja: "自分の番に1回使える。自分の手札から基本炎エネルギーを1枚トラッシュする。そして自分の手札が7枚になるようにカードを引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エナジーストーム" },
			damage: "30x",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "このワザのダメージは、おたがいのポケモン全員についているエネルギーの合計数×30。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "テールナー",
	},

	variants: [{ type: "holo" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [655],
};

export default card;
