import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Flittle",
		th: "ฮิราฮินะ"
	},

	illustrator: "buchi",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		id: "Flittle hidup dan berlari-lari di tanah gersang. Jika buah beri favoritnya diambil, Pokémon ini akan mengejar dan membalaskan dendamnya.",
		th: "ใช้ชีวิตโดยวิ่งวนไปมาในดินแดนรกร้าง หากโดนแย่งผลไม้โปรดไปจะ ไล่ตามเพื่อล้างแค้น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Lompat Menghindar",
			th: "กระโดดหนี"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card