import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เคโรมัตซึ",
		id: "Froakie"
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		th: "ปกป้องผิวด้วยการใช้ฟองที่ละเอียดปกคลุมร่างกาย จะแสร้งทำเป็นเหม่อลอยแต่จะคอยเฝ้ามองรอบข้างโดยไม่คลาดสายตา",
		id: "Froakie melindungi kulitnya dengan melapisi tubuhnya dalam gelembung halus. Walau terlihat ceria, Pokémon ini tanpa lengah terus mengawasi daerah di sekitarnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กระโดดดู",
			id: "Mencoba Melompat"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card