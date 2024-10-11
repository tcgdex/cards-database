import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "นิมเฟีย",
		id: "Sylveon"
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		th: "หนวดสัมผัสพลิ้วไหวไปตามการเคลื่อนไหวที่ปราดเปรียวและสง่างาม แต่การโจมตีของมันนั้นเฉียบคมและเล็งตรงไปยังจุดอ่อน",
		id: "Sosok Sylveon yang menari dan mengibarkan antenanya dengan luwes terlihat begitu anggun, namun serangan Pokémon ini mengincar titik kritis lawan dengan akurat."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "มิสติกรีเทิร์น",
			id: "Mystic Return"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว นำโปเกมอนนั้น และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Pokémon Cadangan lawan, lalu kocok kembali Pokémon tersebut dan semua kartu yang dikenakannya ke Deck lawan."
		},

		cost: ["Psychic"]
	}, {
		name: {
			th: "เสียงทรงเสน่ห์",
			id: "Charm Voice"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 90,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card