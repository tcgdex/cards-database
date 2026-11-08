import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โครัตตา",
		'id-id': "Rattata"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		'th-th': "เป็นโปเกมอนที่พบเห็นได้ทั่วไปแต่ควรระวังให้ดี ฟันหน้าที่แหลมคมนั้นสามารถงอแม้กระทั่งท่อนไม้แข็ง ๆ จนหักได้อย่างง่ายดาย",
		'id-id': "Pokémon yang mudah dijumpai, tapi berhati-hatilah. Gigi depan tajam Rattata dapat mematahkan balok kayu keras dengan mudah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "แทะบาดแผล",
			'id-id': "Menggerogoti Luka"
		},

		effect: {
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x10",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card