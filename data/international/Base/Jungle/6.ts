import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M. Mime",
		'de-de': "Pantimos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Mime Jr.",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Invisible Wall",
				'fr-fr': "Mur invisible",
				'de-de': "Unsichtbare Mauer"
			},
			effect: {
				'en-us': "Whenever an attack (including your own) does 30 or more damage to Mr. Mime (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.) This power can't be used if Mr. Mime is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Chaque fois qu'une attaque (y compris les vôtres) inflige 30 dégâts ou plus à M. Mime (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tout autre effet ou attaque subsiste.) Ce pouvoir ne peut être utilisé si M. Mime est Endormi, Confus ou Paralysé.",
				'de-de': "Immer wenn ein Angriff (auch dein eigener) Pantimos 30 oder mehr Schadenspunkte zufügt (nachdem Schwäche und Resistnz abgerechnet wurden), verhindere diesen Schaden. (Alle anderen Auswirkungen von Agriffen finden immernch statt.) Dies Fähigkeit kann nicht eingesetzt werden, falls Pantimosschlafend, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Meditate",
				'fr-fr': "Yoga",
				'de-de': "Meditation"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Défenseur.",
				'de-de': "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf dem verteidigendem Pokémon zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "If interrupted while miming, it will slap around the enemy with its broad hands.",
		'fr-fr': "Dérangez-le pendant qu'il mime et il se battra en distribuant des volées de claques."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273803,
				tcgplayer: 45132
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273803,
				tcgplayer: 45132
			}
		},
		{
			type: "holo",
			subtype: "missing-expansion-symbol",
		}
	],
}

export default card
