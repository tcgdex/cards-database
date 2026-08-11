import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "คาบูรูโมะ",
		id: "Karrablast"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		th: "ละลายเปลือกของโชโบมากิด้วยของเหลวที่พ่นมาจากปาก แล้วกินแต่ เฉพาะตัว",
		id: "Karrablast mencairkan cangkang Shelmet menggunakan cairan yang disemburkan dari mulutnya dan mengambil isinya untuk disantap."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ชนกระเด็น",
			id: "Mendorong Kuat"
		},

		effect: {
			th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้าม เลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			id: "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card