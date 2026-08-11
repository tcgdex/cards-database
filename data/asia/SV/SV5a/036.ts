import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フラベベ",
		'zh-tw': "花蓓蓓",
		'th-th': "ฟลาเบเบ"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [669],
	hp: 40,
	types: ["Psychic"],

	description: {
		'ja-jp': "赤い花に 乗った フラベベ。 生まれると すぐに お気に入りの 花を 探すために 飛びまわる。",
		'zh-tw': "乘著紅花的花蓓蓓。 從出生那刻開始就會為了 尋找喜歡的花而四處飛行。",
		'th-th': "ฟลาเบเบที่ขี่ดอกไม้สีแดง พอเกิดก็จะรีบบินไปมาเพื่อหาดอกไม้ที่ถูกใจทันที"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "きずをなおす",
			'zh-tw': "療傷",
			'th-th': "รักษาบาดแผล"
		},

		effect: {
			'ja-jp': "自分のポケモン1匹のHPを「30」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「30」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [30]"
		}
	}, {
		cost: ["Psychic"],

		name: {
			'ja-jp': "ようせいのかぜ",
			'zh-tw': "妖精之風",
			'th-th': "สายลมแห่งภูตพราย"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761496,
				tcgplayer: 566091,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
}

export default card