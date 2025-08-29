import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [155],
	set: Set,

	name: {
		en: "Ethan's Cyndaquil",
		fr: "Héricendre de Luth",
		de: "Klarins Feurigel",
		it: "Cyndaquil di Armonio",
		es: "Cyndaquil de Eco",
		pt: "Cyndaquil do Ethan",
		'es-mx': "Cyndaquil de Ethan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Ember",
			fr: "Flammèche",
			de: "Glut",
			it: "Braciere",
			es: "Ascuas",
			pt: "Brasa",
			'es-mx': "Brasas"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

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
