import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブーバーン",
		'zh-tw': "鴨嘴炎獸",
		'th-th': "บูเบิร์น",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'ja-jp': "大きく 息を 吸いこむと 腹の 中の 炎が 勢いを 増して 摂氏２０００度に 達する。",
		'zh-tw': "大口吸氣時，肚子裡的火焰就會燃燒得更旺盛， 達到攝氏２０００度。",
		'th-th': "เมื่อสูดลมหายใจเข้าเฮือกใหญ่ เปลวเพลิงในท้องจะพลุ่งจนสูงถึง 2,000 องศาเซลเซียส",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "メガトンパンチ",
				'zh-tw': "百萬噸重拳",
				'th-th': "เมกะตันพันช์",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				'ja-jp': "ボルトプロージョン",
				'zh-tw': "伏特爆發",
				'th-th': "โวลต์โพลชัน",
			},
			damage: "120+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチに「エレキブル」がいるなら、120ダメージ追加。",
				'zh-tw': "若自己的備戰區有「電擊魔獸」，則增加120點傷害。",
				'th-th': "ถ้าบนเบนช์ฝ่ายเรามี [เอเลคิเบิล] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687497,
				tcgplayer: 571555,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577445,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ブーバー",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "None",
	dexId: [467],
};

export default card;
