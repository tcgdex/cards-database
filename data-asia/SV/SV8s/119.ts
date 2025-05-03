import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Pecharunt",
		th: "โมโมวาโร่"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		id: "Cangkangnya yang berbentuk buah persik merupakan tempat penyimpanan racun ganas. Ia membuat moci beracun lalu menyajikannya ke manusia atau Pokémon.",
		th: "เปลือกรูปทรงลูกท้อคือคลังเก็บพิษร้ายแรง ทำโมจิพิษแล้วเอาไปเลี้ยง คนและโปเกมอน"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Dominasi Berbisa",
			th: "พิษร้ายแรงครอบงำ"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena Bertarung, jumlah Token Kerusakan yang diletakkan akibat kondisi Racun pada Pokémon lawan yang mengalami kondisi Racun bertambah sejumlah 5.",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ โปเกมอนที่เป็นสภาวะ[พิษ]ของฝ่าย ตรงข้าม จำนวนตัวนับแดเมจที่วางด้วยสภาวะ[พิษ] จะเพิ่มขึ้น 5 ตัว"
		}
	}],

	attacks: [{
		name: {
			id: "Poison Chain",
			th: "พอยซันเชน"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] เทิร์นถัดไปของฝ่าย ตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		},

		damage: 10,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card