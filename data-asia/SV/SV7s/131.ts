import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "บัฟฟรอน",
		id: "Bouffalant"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		th: "เพียงแค่พุ่งหัวชนก็สามารถบดทำลายรถยนต์ได้ ยิ่งมีขนที่หัวมากก็ยิ่งได้รับการยอมรับจากพวกพ้องในฝูง",
		id: "Bouffalant dapat menghancurkan mobil cukup dengan serudukan kepalanya. Makin besar rambut di kepalanya, makin tinggi pula posisinya di antara kelompoknya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "เคอร์ลีวอลล์",
			id: "Curly Wall"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้และ [บัฟฟรอน] ตัวอื่นของฝ่ายเรายังอยู่ แดเมจของท่าต่อสู้ที่โปเกมอน[พื้นฐาน]ประเภท[ไร้สี]ฝ่ายเราทุกตัว จะได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-60] แม้จะมีโปเกมอนที่มีความสามารถนี้กี่ตัวก็ตาม เอฟเฟกต์นี้จะไม่เกิดผลซ้ำ",
			id: "Selama Pokémon ini dan Bouffalant sendiri lainnya ada di Arena, kerusakan akibat serangan dari Pokémon lawan yang diterima semua Pokémon Basic tipe {Bening} sendiri berkurang sejumlah 60. Efek ini tidak berlaku kelipatan meskipun ada Pokémon lain yang memiliki Ability yang sama."
		}
	}],

	attacks: [{
		name: {
			th: "พลังแฝง",
			id: "Kekuatan Laten"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card