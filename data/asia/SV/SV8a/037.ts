import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ユキワラシ",
		'id-id': "Snorunt",
		'th-th': "ยูกิวาราชิ",
		'zh-tw': "雪童子",
		'zh-cn': "雪童子"
	},

	illustrator: "Mékayu",
	rarity: "None",
	category: "Pokemon",
	dexId: [361],
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "ユキワラシが 訪れた 家は お金持ちに なると 言われている。 マイナス １００度でも へっちゃら。",
		'id-id': "Dikatakan bahwa rumah yang dikunjungi Snorunt akan menjadi makmur. Suhu -100 ℃ tidak masalah bagi Pokémon ini.",
		'th-th': "ว่ากันว่าบ้านที่ยูกิวาราชิมาเยือนจะมั่งคั่ง แม้จะอยู่ในที่ที่อากาศติดลบ 100 องศาเซลเซียสก็ยังสบาย ๆ",
		'zh-tw': "據說雪童子到訪過的家 將會變得富有。對牠來說 零下１００度根本不算什麼。",
		'zh-cn': "據說雪童子到訪過的家 將會變得富有。對牠來說 零下１００度根本不算什麼。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "おどろかす",
			'id-id': "Mengejutkan",
			'th-th': "ทำให้ตกใจ",
			'zh-tw': "驚嚇",
			'zh-cn': "驚嚇"
		},

		damage: 20,

		effect: {
			'ja-jp': "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。",
			'id-id': "Pilih 1 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lihat sisi depan kartu tersebut, lalu kocok kembali ke Deck lawan.",
			'th-th': "เลือกการ์ด 1 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด หลังจากดูหน้าการ์ดนั้นแล้ว ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ",
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，查看那張卡的正面後放回對手的牌庫並重洗。",
			'zh-cn': "在不看正面的情況下，從對手的手牌選擇1張，查看那張卡的正面後放回對手的牌庫並重洗。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803150,
				tcgplayer: 602382,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604529,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602383,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card