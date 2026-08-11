import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル バリコオル",
		'zh-tw': "伽勒爾 踏冰人偶",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "ユーモラスな 動きで みんなの 人気者。 お腹の 模様から サイコパワーを 放出する。",
		'zh-tw': "幽默的動作使牠獲得了眾人的喜愛。能從腹部的圖案釋放出精神力量。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ボールジャグリング",
				'zh-tw': "球戲法",
			},
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の手札から名前に「ボール」とつくグッズを好きなだけトラッシュし、その枚数×40ダメージ追加。",
				'zh-tw': "從自己的手牌將任意數量的名稱中有「球」的物品卡丟棄，增加其張數×40點傷害。",
			},
		},
		{
			name: {
				ja: "フロストスマッシュ",
				'zh-tw': "冰霜粉碎",
			},
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586543,
				tcgplayer: 571281,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578368,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル バリヤード",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [866],
};

export default card;
