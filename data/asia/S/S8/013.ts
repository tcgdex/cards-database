import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウインディ",
		'zh-tw': "風速狗",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "昔から 多くの 人を 虜にした 美しい ポケモン。 飛ぶように 軽やかに 走る。",
		'zh-tw': "從古時候起就是擄獲眾多人心的美麗寶可夢。能像飛一樣輕盈地奔跑。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ほのおのツメ",
				'zh-tw': "火之爪",
			},
			damage: 40,
			cost: ["Fire"],
		},
		{
			name: {
				'ja-jp': "ヒートタックル",
				'zh-tw': "熱力衝撞",
			},
			damage: 160,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575568,
				tcgplayer: 569514,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ガーディ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [59],
};

export default card;
