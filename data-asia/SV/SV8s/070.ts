import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Togekiss",
		th: "โทเกคิส"
	},

	illustrator: "Narano",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		id: "Togekiss tidak menampakkan diri di tempat adanya pertengkaran dan perselisihan. Belakangan, Pokémon ini tidak pernah terlihat lagi.",
		th: "จะไม่แสดงตัวในสถานที่ที่มีเรื่องทะเลาะเบาะแว้งกัน หมู่นี้ก็ไม่ค่อยเห็น"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			id: "Wonder Kiss",
			th: "วันเดอร์คิส"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, tiap kali Pokémon Bertarung lawan KO, pemain melempar koin 1 kali. Jika hasilnya sisi depan, ambil Kartu Point 1 lembar lebih banyak. Efek ini tidak berlaku kelipatan meskipun ada Pokémon lain yang memiliki Ability yang sama.",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ ทุกครั้งที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม [หมดสภาพ] ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว หยิบการ์ดรางวัลเพิ่ม 1 ใบ แม้จะมีโปเกมอนที่มีความสามารถนี้กี่ตัวก็ตาม เอฟเฟกต์นี้จะไม่เกิดผลซ้ำ"
		}
	}],

	attacks: [{
		name: {
			id: "Speed Wing",
			th: "สปีดวิง"
		},

		damage: 140,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card