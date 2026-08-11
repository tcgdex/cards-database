import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タイレーツ",
		'zh-tw': "列陣兵",
		'th-th': "ไทเรสึ",
		'id-id': "Falinks"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [870],
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "先頭に 立って 指示を 出す ヘイチョーは ６匹の 中で いちばん 強くて 賢いのだ。",
		'zh-tw': "站在最前面下達指示的頭頭是６隻裡面 最強最聰明的。",
		'th-th': "หัวหน้าทหารที่ยืนอยู่หัวแถวคอยออกคำสั่งนั้นแข็งแกร่งและเฉลียวฉลาดที่สุดในบรรดาทหารทั้ง 6 ตัว",
		'id-id': "Pemimpin yang berdiri paling depan dan memberikan perintah adalah Falinks terkuat dan paling cerdas di antara 6 Falinks dalam kelompoknya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ずつき",
			'zh-tw': "頭錘",
			'th-th': "พุ่งหัวชน",
			'id-id': "Tandukan Kepala"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'ja-jp': "いっしょにとつげき",
			'zh-tw': "一起突擊",
			'th-th': "ประจัญบานไปพร้อมกัน",
			'id-id': "Menyerang Bareng"
		},

		damage: "70+",

		effect: {
			'ja-jp': "自分のベンチに「タイレーツ」がいるなら、90ダメージ追加。",
			'zh-tw': "若自己的備戰區有「列陣兵」，則增加90點傷害。",
			'th-th': "ถ้าบนเบนช์ฝ่ายเรามี [ไทเรสึ] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			'id-id': "Jika ada Falinks di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701105,
				tcgplayer: 568174,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card