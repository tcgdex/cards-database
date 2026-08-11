import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "エンテイV",
		'zh-tw': "炎帝V",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "しゅんそく",
				'zh-tw': "瞬步",
			},
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を1枚引く。",
				'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。從自己的牌庫抽出1張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "バーニングロンド",
				'zh-tw': "燃燒迴旋曲",
			},
			damage: "20+",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
				'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687775,
				tcgplayer: 571751,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [244],
};

export default card;
