import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [353],

	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		'es-mx': "Shuppet",
		de: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			'es-mx': "Disparo Espeluznante",
			de: "Spukschuss",
			it: "Colpomistero",
			pt: "Tiro Assustador"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675902,
		cardmarket: 869701
	}
}

export default card