import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Zarude",
		'th-th': "ซารู้ด"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'id-id': "Zarude hidup dalam hutan belantara secara berkelompok. Sangat agresif sehingga ditakuti oleh Pokémon lainnya yang tinggal di hutan.",
		'th-th': "สร้างฝูงอาศัยอยู่ในป่าทึบ มีนิสัยก้าวร้าวมากและเป็นที่หวาดกลัวของ เหล่าโปเกมอนที่อาศัยอยู่ในป่า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Leaf Drain",
			'th-th': "ลีฟเดรน"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 20.",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [20]"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'id-id': "Jungle Whip",
			'th-th': "จังเกิลวิป"
		},

		effect: {
			'id-id': "Pemain dapat mengembalikan semua Energi yang dikenakan pada Pokémon ini ke Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 80.",
			'th-th': "หากต้องการ นำพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดกลับขึ้นมือ การโจมตีนี้จะ เพิ่มแดเมจอีก 80"
		},

		damage: "80+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card