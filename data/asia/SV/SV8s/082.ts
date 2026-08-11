import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Espurr",
		th: "เนียสเปอร์"
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		id: "Pokémon yang tidak berekspresi, tetapi di balik itu, ia sedang mati-matian menahan kekuatan psikokinesisnya.",
		th: "แม้สีหน้าของมันจะไร้อารมณ์ หากแต่ภายในนั้นกำลังพยายามกักเก็บ พลังจิตอย่างเอาเป็นเอาตายอยู่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Lihat Tembus",
			th: "มองทะลุ"
		},

		effect: {
			id: "Lihat Kartu Pegangan lawan.",
			th: "ดูการ์ดบนมือฝ่ายตรงข้าม"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Psyshot",
			th: "ไซโคช็อต"
		},

		damage: 20,
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