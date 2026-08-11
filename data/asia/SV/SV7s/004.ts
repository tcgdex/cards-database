import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ยูเรเดิล",
		id: "Cradily"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		th: "ขาสั้นและเดินช้า แต่คอและหนวดนั้นยืดออกได้ถึง 3 เท่า ใช้จับเหยื่อที่อยู่ห่างไกล",
		id: "Kaki Cradily pendek dan jalannya lambat, tetapi leher dan tentakelnya dapat memanjang hingga 3 kali lipat dan menangkap mangsa yang jauh darinya."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "เมือกเลือกหยิบ",
			id: "Lendir Beraneka Ragam"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือก 1 สภาวะจากสภาวะ[พิษ]/[ไหม้]/[สับสน] ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะผิดปกตินั้น",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 di antara Racun, Luka Bakar, atau Pusing, lalu ubah kondisi Pokémon Bertarung lawan menjadi kondisi tersebut."
		}
	}],

	attacks: [{
		name: {
			th: "ลมไอพิษ",
			id: "Angin Miasma"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนสภาวะผิดปกติที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามได้รับอยู่ x100",
			id: "Serangan ini memberikan kerusakan sejumlah 100 untuk tiap Kondisi Khusus yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: "100×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card