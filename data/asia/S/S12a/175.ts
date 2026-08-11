import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバーン",
		'zh-tw': "鴨嘴炎獸",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "大きく 息を 吸いこむと 腹の 中の 炎が 勢いを 増して 摂氏２０００度に 達する。",
		'zh-tw': "大口吸氣時，肚子裡的火焰就會燃燒得更旺盛，達到攝氏２０００度。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "メガトンパンチ",
				'zh-tw': "百萬噸重拳",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ボルトプロージョン",
				'zh-tw': "伏特爆發",
			},
			damage: "120+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "自分のベンチに「エレキブル」がいるなら、120ダメージ追加。",
				'zh-tw': "若自己的備戰區有「電擊魔獸」，則增加120點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687737,
				tcgplayer: 571713,
			},
		},
	],

	evolveFrom: {
		ja: "ブーバー",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [467],
};

export default card;
