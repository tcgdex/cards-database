import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Cetitan",
		th: "ฮัลค์จิระ"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		id: "Tanduk rahang atas Cetitan yang memusatkan energi es menjadi bersuhu sangat rendah dan membekukan sekitarnya.",
		th: "พลังงานน้ำแข็งจะไปรวมอยู่ตรงเขาที่ขากรรไกรบนทำให้เขามีอุณหภูมิ ต่ำมากจนทำให้บริเวณโดยรอบแข็งตัวเป็นน้ำแข็งไปด้วย"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tubuh Tegap",
			th: "ร่างล่ำสัน"
		},

		effect: {
			id: "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30.",
			th: "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]"
		}
	}],

	attacks: [{
		name: {
			id: "Danger Mouth",
			th: "แดนเจอร์เมาท์"
		},

		damage: 150,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card