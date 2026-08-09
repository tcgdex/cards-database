import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン",
		'zh-tw': "多邊獸",
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "最高の 科学力を 使い 世界で はじめて プログラムにより 作られた 人工の ポケモン。",
		'zh-tw': "牠是以最尖端的科學力量，首度在世上利用程式創造 出來的人工寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶんきけいさん",
				'zh-tw': "分別計算",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分または相手の山札を上から4枚見て、好きな順番に入れ替えて、山札の上にもどす。",
				'zh-tw': "查看自己或者對手的牌庫上方4張卡，以任意順序排列，放回牌庫上方。",
			},
		},
		{
			name: {
				ja: "ビーム",
				'zh-tw': "光束",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667958,
				tcgplayer: 570014,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [137],
};

export default card;
