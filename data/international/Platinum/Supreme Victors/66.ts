import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Manectric G",
		'fr-fr': "Élecsprint ",
		'de-de': "Voltenso G"
	},
	illustrator: "Ryota Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [310],
	hp: 80,
	types: [
		"Lightning"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{

			name: {
				'en-us': "Energy Absorption",
				'fr-fr': "Absorption d'énergie",
				'de-de': "Energieaufnahme"
			},
			effect: {
				'en-us': "Search your discard pile for up to 2 Energy cards and attach them to Manectric G.",
				'fr-fr': "Choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie et attachez-les à Elecsprint .",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 2 Energiekarten und lege sie an Voltenso G an."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Fang",
				'fr-fr': "Crocs Éclair",
				'de-de': "Donnerzahn"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278757,
				tcgplayer: 87168
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278757,
				tcgplayer: 87168
			}
		},
	],

}

export default card
