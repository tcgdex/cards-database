import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เนียวโรโมะ",
		id: "Poliwag"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		th: "ในแม่น้ำที่ไหลเชี่ยวจะใช้ริมฝีปากหนา ๆ ยึดติดกับหินไว้เหมือนกับปุ่มดูด",
		id: "Pada sungai yang alirannya deras, Poliwag bertahan agar tidak terbawa arus dengan menempelkan bibir tebalnya ke bebatuan bagaikan pengisap."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ฟอง",
			id: "Gelembung"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 10,
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