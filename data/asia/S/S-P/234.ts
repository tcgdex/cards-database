import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アゴジムシ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "大きな 顎で 森の 地面を 掘って 巣穴を つくる。 甘い 樹液が 大好物。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいでん" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[雷]エネルギーを1枚選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ふいをつく" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 606603,
				tcgplayer: 597416,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [736],
};

export default card;
