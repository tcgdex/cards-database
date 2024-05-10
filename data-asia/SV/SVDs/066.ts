import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ปิคซีex",
		id: "Clefable ex"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "โซนพื้นผิวดวงจันทร์",
			id: "Zona Permukaan Bulan"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนฝ่ายเราทุกตัวที่มีพลังงาน[พลังจิต]ติดอยู่ ทั้งหมดจะหายไป",
			id: "Selama Pokémon ini ada di Arena, semua Pokémon sendiri yang mengenakan Energi {Psychic} menjadi tidak membutuhkan Energi untuk Mundur."
		}
	}],

	attacks: [{
		name: {
			th: "มูนวันเดอร์",
			id: "Moon Wonder"
		},

		effect: {
			th: "เลือกพลังงาน[พลังจิต]ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบ ย้ายไปติดกับโปเกมอนฝ่ายเราตามชอบ",
			id: "Pilih sesukanya Energi {Psychic} yang dikenakan pada Pokémon di Arena sendiri, lalu pindahkan sesukanya ke Pokémon sendiri."
		},

		damage: 170,
		cost: ["Psychic", "Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card