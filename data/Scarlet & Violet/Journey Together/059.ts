import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [353],
	set: Set,

	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		de: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet",
		'es-mx': "Shuppet"
	},

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
			de: "Spukschuss",
			it: "Colpomistero",
			pt: "Tiro Assustador",
			'es-mx': "Disparo Espeluznante"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",
	illustrator: "miki kudo",

	thirdParty: {
		cardmarket: 817211
	},

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
