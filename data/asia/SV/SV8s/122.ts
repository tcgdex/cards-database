import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Skarmory",
		'th-th': "แอร์มุโด"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'id-id': "Kabarnya bulu Skarmory yang rontok itu tipis dan tajam sehingga adakalanya digunakan sebagai pedang.",
		'th-th': "ขนที่หลุดร่วงนั้นทั้งบางและแหลมคม เหมือนว่าจะถูกเก็บไปใช้ต่างดาบ ด้วยล่ะ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Sayap Baja",
			'th-th': "ปีกเหล็ก"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30.",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
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