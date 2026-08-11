import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Latias ex",
		th: "ลาทิอาสex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Skyline",
			th: "สกายไลน์"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, semua Pokémon Basic sendiri menjadi tidak membutuhkan Energi untuk Mundur.",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ พลังงานสำหรับ[หนี]ของโปเกมอน[พื้นฐาน]ฝ่ายเรา ทุกตัว ทั้งหมดจะหายไป"
		}
	}],

	attacks: [{
		name: {
			id: "Pisau Eon",
			th: "คมดาบอนันต์"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 200,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card