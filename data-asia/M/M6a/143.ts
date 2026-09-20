import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "エネコロロ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "エナジードロー" },
			effect: {
				ja: "このパワーは、自分の番に1回使うことができる。自分の手札からエネルギーを1枚選び出し、トラッシュする。その後、自分の山札からカードを3枚まで引く。このポケモンが特殊状態なら、このパワーを使うことはできない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エネだまMAX" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "自分のバトルポケモン全員のエネルギーの合計×10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908321,
			},
		},
	],

	retreat: 1,
	rarity: "Classic Collection",
	dexId: [301],
};

export default card;
