import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Uxie",
		th: "ยุคซี"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		id: "Dikenal sebagai Dewa Pengetahuan. Uxie memiliki kekuatan untuk menghapus ingatan orang yang memandang matanya.",
		th: "เรียกกันว่าเป็นเทพแห่งปัญญา ว่ากันว่ามีพลังลบความทรงจำของผู้ที่ สบตาด้วย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Ingatan Rasa Sakit",
			th: "ความทรงจำแห่งความเจ็บปวด"
		},

		effect: {
			id: "Letakkan masing-masing sejumlah 2 Token Kerusakan pada semua Pokémon lawan.",
			th: "วางตัวนับแดเมจบนโปเกมอนฝ่ายตรงข้ามทุกตัว ตัวละ 2 ตัว"
		},

		cost: ["Psychic"]
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