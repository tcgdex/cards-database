import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Mesprit",
		th: "เอ็มริต"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		id: "Mesprit mengajarkan perihnya rasa sedih dan pentingnya rasa senang kepada manusia. Dikenal sebagai Dewa Emosi.",
		th: "สอนให้ผู้คนได้รู้ถึงความทุกข์ทรมานของความเศร้าและคุณค่าของความ ยินดี ถูกเรียกว่าเป็นเทพแห่งอารมณ์"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memuaskan Hati",
			th: "เติมเต็มหัวใจ"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar {Psychic} dari Kartu Pegangan sendiri, lalu kenakan sesukanya pada Pokémon sendiri.",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[พลังจิต]] ได้สูงสุด 2 ใบจากบนมือฝ่ายเรา ติดที่ โปเกมอนฝ่ายเราตามชอบ"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "God Burst",
			th: "ก็อดเบิสต์"
		},

		effect: {
			id: "Jika tidak ada Uxie dan Azelf di Cadangan sendiri, serangan ini gagal.",
			th: "ถ้าบนเบนช์ฝ่ายเราไม่มี [ยุคซี] [อักนอม] อยู่ ท่าต่อสู้นี้จะล้มเหลว"
		},

		damage: 160,
		cost: ["Psychic", "Psychic"]
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