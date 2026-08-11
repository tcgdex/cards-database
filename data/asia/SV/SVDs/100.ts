import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "เอ็นนิวท์",
		id: "Salazzle"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		th: "ยั่วยวนคู่ต่อสู้ที่มึนงงเพราะแก๊สพิษด้วยท่าทีเย้ายวน ทำให้อีกฝ่ายกลายเป็นผู้รับใช้ที่ซื่อสัตย์",
		id: "Salazzle menggunakan sosoknya yang memesona untuk memikat lawan yang terhuyung-huyung akibat gas beracun dan menjadikan mereka bawahan yang setia."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ห่อหุ้มด้วยแก๊ส",
			id: "Gas yang Menyelimuti"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			th: "ตบแรง",
			id: "Menepuk"
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card