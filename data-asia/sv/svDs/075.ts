import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ดีอ็อกซิส",
		id: "Deoxys"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		th: "ไวรัสอวกาศกลายพันธุ์อย่างฉับพลันแล้วกลายเป็นโปเกมอน จะปรากฏตัวอยู่ใกล้ ๆ ออโรร่า",
		id: "Virus angkasa luar yang mengalami mutasi dan menjadi Pokémon. Deoxys muncul di dekat aurora."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ไซโคพันช์",
			id: "Pukulan Psikis"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			th: "จีโนมสไปรัล",
			id: "Genome Spiral"
		},

		effect: {
			th: "นำพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมด ย้ายไปติดกับโปเกมอนบนเบนช์ตามชอบ",
			id: "Pindahkan sesukanya semua Energi yang dikenakan pada Pokémon ini ke Pokémon Cadangan."
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Psychic"]
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
	regulationMark: "G"
}

export default card