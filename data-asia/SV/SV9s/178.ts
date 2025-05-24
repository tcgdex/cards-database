import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ปิปปีex ของลิเลีย",
		id: "Clefairy <Lillie> ex"
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "แฟรี่โซน",
			id: "Fairy Zone"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ จุดอ่อนของโปเกมอน[มังกร]บนกระดานฝ่ายตรงข้าม ทุกตัว จะเป็นประเภท[พลังจิต]ทั้งหมด {จุดอ่อน คำนวณแดเมจ x2}",
			id: "Selama Pokémon ini ada di Arena, Kelemahan semua Pokémon {Naga} di Arena lawan menjadi tipe {Psychic}. [Perhitungan kerusakan dari tipe yang menjadi Kelemahan adalah 2 kali lipat.]"
		}
	}],

	attacks: [{
		name: {
			th: "ฟูลมูนรอนโด",
			id: "Full Moon Rondo"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ของทั้งสองฝ่าย x20",
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Pokémon Cadangan kedua pemain."
		},

		damage: "20+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	suffix: "EX"
}

export default card