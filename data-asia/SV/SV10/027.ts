import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキノオー",
		'zh-tw': "暴雪王",
		'zh-cn': "暴雪王",
	},

	illustrator: "kamonabe",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "万年雪が 積もる 山脈で 静かに 暮らす。 ブリザードを 発生させて 姿を 隠す。",
		'zh-tw': "在萬年積雪的山脈 靜靜生活。會引發 暴風雪來隱藏自己。",
		'zh-cn': "在萬年積雪的山脈 靜靜生活。會引發 暴風雪來隱藏自己。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "つきたおし",
				'zh-tw': "撞倒",
				'zh-cn': "撞倒",
			},
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ひょうけつウッド",
				'zh-tw': "結冰木",
				'zh-cn': "結冰木",
			},
			damage: "120+",
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンに[G]エネルギーが2個以上ついているなら、120ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有2個以上【草】能量，則增加120點傷害。",
				'zh-cn': "若這隻寶可夢身上附有2個以上【草】能量，則增加120點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821859,
				tcgplayer: 628668,
			},
		},
	],

	evolveFrom: {
		ja: "ユキカブリ",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [460],
};

export default card;
