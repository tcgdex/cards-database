import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャヒート",
		'zh-tw': "炎熱喵",
		'th-th': "เนียฮีท",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'ja-jp': "首の 付け根の 炎袋は 戦いに なると 火力が 上がり 鈴のような 音を 出す。",
		'zh-tw': "脖子根部的火囊在進入戰鬥狀態後火力就會上升， 並發出像鈴鐺般的聲音。",
		'th-th': "ในยามต่อสู้ ถุงไฟตรงคอจะส่งเสียงคล้ายกระดิ่งดังออกมา และเปลวไฟจะลุกไหม้รุนแรงขึ้น",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "かみつく",
				'zh-tw': "咬住",
				'th-th': "กัดติด",
			},
			damage: 30,
			cost: ["Fire"],
		},
		{
			name: {
				'ja-jp': "フレアストライク",
				'zh-tw': "閃焰強襲",
				'th-th': "แฟลร์สไตรค์",
			},
			damage: 80,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「フレアストライク」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「閃焰強襲」。",
				'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [แฟลร์สไตรค์] ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752902,
				tcgplayer: 566172,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニャビー",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [726],
};

export default card;
