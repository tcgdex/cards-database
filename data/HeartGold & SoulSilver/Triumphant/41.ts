import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Magby",
		fr: "Magby",
		de: "Magby"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		240,
	],

	hp: 30,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
				fr: "Joli visage endormi",
				de: "Niedliches Schlafgesicht"
			},
			effect: {
				en: "As long as Magby is Asleep, prevent all damage done to Magby by attacks.",
				fr: "Tant que Magby est Endormi, empêchez tous les dégâts qui lui sont infligés par des attaques.",
				de: "Solange Magby schläft, verhindere allen Schaden, der Magby durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Play with Fire",
				fr: "Jouer avec le feu",
				de: "Spiel mit dem Feuer"
			},
			effect: {
				en: "The Defending Pokémon is now Burned. Magby is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé. Magby est maintenant Endormi.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt. Magby schläft jetzt."
			},

		},
	],

	retreat: 0,

	description: {
		en: "It is found in volcanic craters. Its body temperature is over 1,100 degrees Fahrenheit, so don’t underestimate it."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
