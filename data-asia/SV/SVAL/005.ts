import { Card } from "../../../interfaces"
import Set from "../SVAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咩利羊",
		th: "เมรีป",
		id: "Mareep"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "體毛會不斷地變長。即使每到夏天就會掉光， 也能在１週內長回原樣。",
		th: "ขนตามตัวจะยาวขึ้นเรื่อย ๆ พอถึงหน้าร้อนจะผลัดขนออกทั้งหมด แต่ไม่ถึงสัปดาห์ก็จะขึ้นกลับมาเป็นเหมือนเดิม",
		id: "Bulu Mareep tumbuh terus. Seluruh bulu Pokémon ini akan rontok pada musim panas, namun akan kembali seperti semula dalam 1 minggu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈哩啪啦",
			th: "ประกายไฟ",
			id: "Berpijar-pijar"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "電球",
			th: "อิเล็กทริกบอล",
			id: "Electro Ball"
		},

		damage: 40,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card