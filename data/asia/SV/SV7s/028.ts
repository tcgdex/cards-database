import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ทัททู",
		'id-id': "Horsea"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'th-th': "อาศัยอยู่ในทะเลที่มีกระแสน้ำสงบ เมื่อถูกโจมตีจะพ่นหมึกดำใส่แล้วใช้โอกาสนั้นหนี",
		'id-id': "Horsea tinggal di laut yang aliran arusnya tenang. Jika diserang, Pokémon ini menembakkan tinta hitam pekat dan melarikan diri."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "อยู่นิ่ง ๆ",
			'id-id': "Tidak Bergerak"
		},

		effect: {
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'id-id': "Pulihkan HP Pokémon ini sejumlah 30."
		},

		cost: ["Water"]
	}, {
		name: {
			'th-th': "ครีบใบมีด",
			'id-id': "Sirip Pemotong"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card