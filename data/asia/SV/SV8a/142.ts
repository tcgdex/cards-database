import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "つりざおMAX",
		'id-id': "Kail MAX",
		'th-th': "คันเบ็ด MAX",
		'zh-tw': "釣竿MAX",
		'zh-cn': "釣竿MAX"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュからポケモンと基本エネルギーを合計5枚まで選び、相手に見せて、手札に加える。",
		'id-id': "Pilih paling banyak total 5 lembar Pokémon dan Energi Dasar dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan.",
		'th-th': "เลือกการ์ดโปเกมอนและการ์ดพลังงานพื้นฐานรวมกันได้สูงสุด 5 ใบ จากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
		'zh-tw': "從自己的棄牌區選擇寶可夢卡與基本能量卡合計最多5張，在給對手看過後加入手牌。",
		'zh-cn': "從自己的棄牌區選擇寶可夢卡與基本能量卡合計最多5張，在給對手看過後加入手牌。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803255,
				tcgplayer: 602566,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H"
}

export default card