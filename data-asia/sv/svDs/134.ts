import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ทากิงกูลูex",
		id: "Grafaiai ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			th: "น้ำลายปวดชา",
			id: "Air Liur Pelumpuh"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			th: "พอย.พ.พอยซัน",
			id: "Buang-buang Racun"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [พอย.พ.พอยซัน] ไม่ได้",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun. Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Buang-buang Racun."
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card