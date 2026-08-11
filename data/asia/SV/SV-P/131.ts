import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ソーナンス",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "光や ショックを 嫌う。 攻撃されると 体が ふくらみ 反撃が 強力に なる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "がまんのかべ" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、おたがいの場・手札・トラッシュにあるポケモン（[超]ポケモンはのぞく）の特性は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコダメージ" },
			damage: "10+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数x10ダメージを追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 749912,
				tcgplayer: 587880,
			},
		},
	],

	retreat: 2,
	rarity: "Promo",
	dexId: [202],
};

export default card;
