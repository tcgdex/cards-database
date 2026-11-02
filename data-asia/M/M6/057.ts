import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "カクレオン",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "体の 色を 変えて 景色に 溶けこみ 獲物に 忍び寄る。 お腹の 模様は 消せないのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "カラフルウィップ" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の手札からポケモンを好きなだけ相手に見せて、見せたポケモンのタイプの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899972,
				tcgplayer: 709210,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [352],
};

export default card;
