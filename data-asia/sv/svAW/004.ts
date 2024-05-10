import { Card } from "../../../interfaces"
import Set from "../svAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狂歡浪舞鴨",
		th: "เวนิวัล",
		id: "Quaquaval"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		'zh-tw': "會善用只要一踢就能踢翻卡車的強韌腳力， 展現充滿異國風情的舞蹈。",
		th: "แสดงการเต้นรำที่มีความแปลกใหม่ด้วยการใช้ขาแข็งแกร่งที่ผลักรถบรรทุกให้ล้มได้ด้วยการเตะครั้งเดียว",
		id: "Quaquaval menunjukkan tarian eksotis dengan memanfaatkan kaki kuatnya yang dapat menggulingkan truk hanya dengan satu tendangan."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "能量嘉年華",
			th: "เอนเนอร์จี้คาร์นิวัล",
			id: "Energy Carnival"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張基本能量卡，附於自己的寶可夢身上。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri."
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水炮踢",
			th: "ไฮโดรคิก",
			id: "Hydro Kick"
		},

		damage: 140,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card