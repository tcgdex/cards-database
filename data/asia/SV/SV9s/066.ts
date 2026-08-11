import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โยกิราส",
		id: "Larvitar"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		th: "เกิดมาใต้ชั้นดินลึก พอกินดินเท่าภูเขาเข้าไปจะกลายเป็นดักแด้เพื่อ เสริมสร้างร่างกายใหม่",
		id: "Larvitar terlahir di bawah tanah yang dalam. Untuk membentuk tubuhnya, Pokémon ini menjadi pupa setelah memakan habis segunung tanah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กัดขย้ำ",
			id: "Mengunyah"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่ง ต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
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