import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โชโบมากิ",
		id: "Shelmet"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		th: "มีสรีระที่แปลก แสดงปฏิกิริยาตอบสนองกับพลังงานไฟฟ้า เวลาอยู่กับ คาบูรูโมะจะวิวัฒนาการด้วยเหตุผลบางอย่าง",
		id: "Shelmet memiliki tubuh misterius yang bereaksi pada energi listrik. Entah kenapa, Pokémon ini akan berevolusi jika ada bersama Karrablast."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เชลล์ฮิต",
			id: "Shell Hit"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้ รับแดเมจของท่าต่อสู้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan."
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card