import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Clobbopus",
		th: "ทาทักโกะ"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Clobbopus naik ke darat untuk mencari makanan. Penuh rasa ingin tahu sehingga saat melihat sesuatu, Pokémon ini memukulnya terlebih dahulu dengan tentakelnya.",
		th: "ออกมาบนพื้นดินเพื่อหาอาหาร เต็มไปด้วยความอยากรู้อยากเห็น สิ่งที่ เห็นจะถูกตีด้วยหนวดก่อนเป็นอันดับแรก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Gasak Sedikit",
			th: "จุ้นจ้านหน่อย"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 10.",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card