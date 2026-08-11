import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レシラム&リザードンGX",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げきりん" },
			damage: "30+",
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
		{
			name: { ja: "フレアストライク" },
			damage: 230,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「フレアストライク」が使えない。",
			},
		},
		{
			name: { ja: "ダブルブレイズGX" },
			damage: "200+",
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				'ja-jp': "追加で[炎]エネルギーが3個ついているなら、100ダメージ追加。その場合、このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557455,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [643, 6],

	suffix: "TAG TEAM-GX",
};

export default card;
