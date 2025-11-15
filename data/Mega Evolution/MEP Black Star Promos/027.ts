import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo",
		it: "Haunter",
		es: "Haunter",
		pt: "Haunter"
	},

	illustrator: "Arai Kiriko",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [93],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
		de: "Nebulak",
		it: "Gastly",
		es: "Gastly",
		pt: "Gastly"
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			de: "Spukschuss",
			it: "Colpomistero",
			es: "Disparo Embrujado",
			pt: "Tiro Assustador"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",
}

export default card
