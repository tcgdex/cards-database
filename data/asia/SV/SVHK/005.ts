import { Card } from "models/database/card"
import Set from "../SVHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼叫尾",
		'th-th': "หางตะเบ็ง",
		'id-id': "Scream Tail"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "過去只有過１次目擊紀錄。是與古老的探險記裡記載的 神秘生物長得很像的寶可夢。",
		'th-th': "ตามข้อมูลระบุว่าเคยมีผู้พบเห็นเพียงครั้งเดียว เป็นโปเกมอนที่คล้ายกับสิ่งมีชีวิตลึกลับที่ถูกระบุไว้ในบันทึกการสำรวจเก่าแก่",
		'id-id': "Laporan kesaksian atas Pokémon ini hanya ada 1 di masa lalu. Sosoknya mirip dengan makhluk hidup misterius yang tertera dalam jurnal ekspedisi kuno."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "唱歌鼓勵",
			'th-th': "ร้องให้กำลังใจ",
			'id-id': "Menyanyi Memotivasi"
		},

		effect: {
			'zh-tw': "將自己的備戰區的1隻「古代」寶可夢恢復「100」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอน [โบราณ] บนเบนช์ฝ่ายเรา 1 ตัว [100]",
			'id-id': "Pulihkan HP 1 Pokémon Purba di Cadangan sendiri sejumlah 100."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "巨聲",
			'th-th': "ไฮเปอร์วอยซ์",
			'id-id': "Hyper Voice"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card