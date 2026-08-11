import { Card } from "models/database/card"
import Set from "../SVAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "愛吃豚",
		'th-th': "กูร์ตง",
		'id-id': "Lechonk"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "一整天都在覓食。雖然擁有優秀的嗅覺， 但卻只被用在覓食上。",
		'th-th': "หาอาหารตลอดวัน มีประสาทการรับกลิ่นที่ยอดเยี่ยมแต่จะไม่ใช้ไปกับเรื่องที่ไม่เกี่ยวข้องกับการหาอาหาร",
		'id-id': "Lechonk mencari makanan seharian penuh. Meskipun memiliki indra penciuman yang sangat baik, Pokémon ini tidak menggunakannya selain untuk mencari makan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚",
			'th-th': "รวบรวม",
			'id-id': "Mengumpulkan"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。",
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			'id-id': "Ambil 1 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊",
			'th-th': "พุ่งเข้าชน",
			'id-id': "Serudukan"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card