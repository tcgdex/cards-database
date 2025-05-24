import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เมทากรอสex <ของไดโกะ>",
		id: "Metagross <Steven> ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 340,
	types: ["Metal"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "เอ็กซ์บูต",
			id: "X-Boot"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[พลังจิต]] และการ์ด [พลังงานพื้นฐาน[โลหะ]] ได้สูงสุดอย่างละ 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่ โปเกมอน[พลังจิต]หรือ[โลหะ]ฝ่ายเราตามชอบ แล้วสับสำรับการ์ด",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih Energi Dasar {Psychic} dan Energi Dasar {Logam} masing-masing paling banyak 1 lembar dari Deck sendiri, lalu kenakan sesukanya pada Pokémon {Psychic} atau {Logam} sendiri. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			th: "เมทัลสแตมป์",
			id: "Metal Stomp"
		},

		damage: 200,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "I",
	suffix: "EX"
}

export default card