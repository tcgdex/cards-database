import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โดโรบังโค",
		id: "Mudbray"
	},

	illustrator: "Aliya Chen",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		th: "โคลนที่ติดอยู่คือดินที่เคี้ยวซ้ำแล้วซ้ำเล่า ไม่ว่าจะตากแดดนานขนาดไหน ก็ไม่แห้ง",
		id: "Lumpur yang menyelimuti Mudbray adalah hasil memamah biak setelah memakan tanah. Lumpur tersebut tidak akan kering meskipun berjemur dalam waktu yang lama."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "วิ่งแรง",
			id: "Berlari"
		},

		effect: {
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x40",
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 40 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "40×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card