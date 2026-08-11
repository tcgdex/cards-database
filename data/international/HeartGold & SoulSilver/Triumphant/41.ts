import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Magby",
		'fr-fr': "Magby",
		'de-de': "Magby"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [240],

	hp: 30,

	types: [
		"Fire"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sweet Sleeping Face",
				'fr-fr': "Joli visage endormi",
				'de-de': "Niedliches Schlafgesicht"
			},
			effect: {
				'en-us': "As long as Magby is Asleep, prevents all damage done to Magby by attacks.",
				'fr-fr': "Tant que Magby est Endormi, empêchez tous les dégâts qui lui sont infligés par des attaques.",
				'de-de': "Solange Magby schläft, verhindere allen Schaden, der Magby durch Angriffe zugefügt wird."
			}
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Play with Fire",
				'fr-fr': "Jouer avec le feu",
				'de-de': "Spiel mit dem Feuer"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned. Magby is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé. Magby est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt. Magby schläft jetzt."
			},

		},
	],

	retreat: 0,

	description: {
		'en-us': "It is found in volcanic craters. Its body temperature is over 1,100 degrees Fahrenheit, so don’t underestimate it."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87006,
				cardmarket: 279571
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279571,
				tcgplayer: 87006
			}
		},
	],

}

export default card
