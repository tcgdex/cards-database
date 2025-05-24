import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "คาเงะโบสึ",
		id: "Shuppet"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		th: "ชอบความรู้สึกอย่างความเคียดแค้นกับความริษยามาก เขาที่ตั้งตรงนั้น จับความรู้สึกของคนได้",
		id: "Perasaan iri dan dengki adalah makanan favorit Shuppet. Tanduk tegak Pokémon ini menangkap perasaan manusia."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ฮอลโลว์ช็อต",
			id: "Hollow Shot"
		},

		damage: 20,
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
	regulationMark: "I"
}

export default card