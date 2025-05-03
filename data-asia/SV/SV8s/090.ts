import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Indeedee",
		th: "อิเอซซัน"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		id: "Indeedee selalu berada di sisi pelatihnya. Pokémon ini menggunakan kekuatan psikokinesisnya untuk memprediksi aksi dan mengurus keseharian pelatihnya.",
		th: "จะอยู่เคียงข้างเทรนเนอร์อยู่เสมอ ใช้พลังจิตในการคาดการณ์ พฤติกรรมและคอยดูแลชีวิตประจำวันของเทรนเนอร์"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Pemulihan Suka Merawat",
			th: "ปรนนิบัติรักษา"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Pulihkan HP Pokémon Bertarung sendiri sejumlah 30, lalu pulihkan juga 1 Kondisi Khusus yang dialami Pokémon tersebut.",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง ฟื้นฟู HP ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรา [30] รักษาสภาวะผิดปกติ 1 สภาวะ ด้วย"
		}
	}],

	attacks: [{
		name: {
			id: "Psikokinesis Super",
			th: "ซูเปอร์โทรจิต"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
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