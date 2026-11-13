import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "カクレオン",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "体の 色を 変えて 景色に 溶けこみ 獲物に 忍び寄る。 お腹の 模様は 消せないのだ。"
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

	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900114,
				tcgplayer: 709241,
				cardtrader: 403171,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [352],
};

export default card;
