import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Skarmory",
		th: "แอร์มุโด"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		id: "Kabarnya bulu Skarmory yang rontok itu tipis dan tajam sehingga adakalanya digunakan sebagai pedang.",
		th: "ขนที่หลุดร่วงนั้นทั้งบางและแหลมคม เหมือนว่าจะถูกเก็บไปใช้ต่างดาบ ด้วยล่ะ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Sayap Baja",
			th: "ปีกเหล็ก"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]"
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