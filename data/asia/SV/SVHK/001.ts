import { Card } from "../../../interfaces"
import Set from "../SVHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小火馬",
		th: "โพนีตะ",
		id: "Ponyta"
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "剛出生的時候不擅長奔跑，但隨著和夥伴們不斷地賽跑， 會逐漸鍛鍊出強健的腳力。",
		th: "ช่วงแรกเกิดจะวิ่งไม่เก่ง แต่เมื่อได้วิ่งแข่งกับเพื่อนพ้อง ขาและสะโพกก็จะค่อย ๆ พัฒนาจนแข็งแกร่งขึ้น",
		id: "Ponyta yang baru lahir tidak pandai berlari. Selagi main kejar-kejaran dengan temannya, kaki dan pinggangnya tumbuh makin kuat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蓄能量",
			th: "เอนเนอร์จี้ชาร์จ",
			id: "Energy Charge"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "火之尾",
			th: "หางไฟ",
			id: "Ekor Api"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card