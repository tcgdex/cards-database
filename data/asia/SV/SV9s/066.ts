import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โยกิราส",
		'id-id': "Larvitar"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'th-th': "เกิดมาใต้ชั้นดินลึก พอกินดินเท่าภูเขาเข้าไปจะกลายเป็นดักแด้เพื่อ เสริมสร้างร่างกายใหม่",
		'id-id': "Larvitar terlahir di bawah tanah yang dalam. Untuk membentuk tubuhnya, Pokémon ini menjadi pupa setelah memakan habis segunung tanah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กัดขย้ำ",
			'id-id': "Mengunyah"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่ง ต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card