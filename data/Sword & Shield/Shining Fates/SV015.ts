import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Flambino",
		en: "Scorbunny",
		es: "Scorbunny",
		it: "Scorbunny",
		pt: "Scorbunny",
		de: "Hopplo"
	},

	illustrator: "MAHOU",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Flammèche",
			en: "Ember",
			es: "Ascuas",
			it: "Braciere",
			pt: "Brasa",
			de: "Glut"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon.",
			en: "Discard an Energy from this Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "It has special pads on the backs of its feet, and one on its nose. Once it's raring to fight, these pads radiate tremendous heat."
	}
}

export default card
