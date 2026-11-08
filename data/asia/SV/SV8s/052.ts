import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cetitan",
		'th-th': "ฮัลค์จิระ"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'id-id': "Tanduk rahang atas Cetitan yang memusatkan energi es menjadi bersuhu sangat rendah dan membekukan sekitarnya.",
		'th-th': "พลังงานน้ำแข็งจะไปรวมอยู่ตรงเขาที่ขากรรไกรบนทำให้เขามีอุณหภูมิ ต่ำมากจนทำให้บริเวณโดยรอบแข็งตัวเป็นน้ำแข็งไปด้วย"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Tubuh Tegap",
			'th-th': "ร่างล่ำสัน"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30.",
			'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]"
		}
	}],

	attacks: [{
		name: {
			'id-id': "Danger Mouth",
			'th-th': "แดนเจอร์เมาท์"
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