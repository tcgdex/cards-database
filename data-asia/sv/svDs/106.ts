import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "โทเกะเดมารุ",
		id: "Togedemaru"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		th: "พออยู่ในภาวะคับขันจะม้วนตัวและทำให้หนามกลางหลังตั้งชัน ปล่อยไฟฟ้าช็อตตามอำเภอใจ",
		id: "Ketika dalam keadaan bahaya, Togedemaru membulatkan tubuhnya, mendirikan duri-duri di punggungnya, dan menembakkan serangan petir secara asal-asalan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ขดกลม",
			id: "Membulat"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "กลิ้งโจมตี",
			id: "Tubrukan Menggelinding"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card