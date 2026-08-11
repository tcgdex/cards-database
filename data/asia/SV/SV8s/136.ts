import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Applin",
		th: "คาจิชชู"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 40,
	types: ["Dragon"],

	description: {
		id: "Applin hidup di dalam buah apel. Jika apelnya habis, Pokémon ini akan melemah karena kehilangan cairan tubuhnya.",
		th: "อาศัยอยู่ในแอปเปิล พอไม่มีแอปเปิลแล้วจะสูญเสียน้ำในร่างกายและ อ่อนแอลง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Nutrisi",
			th: "สารอาหาร"
		},

		effect: {
			id: "Pulihkan HP 1 Pokémon sendiri sejumlah 30.",
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [30]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Menggulingkan",
			th: "ล้มกลิ้ง"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 30.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30"
		},

		damage: "20+",
		cost: ["Grass", "Fire"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card