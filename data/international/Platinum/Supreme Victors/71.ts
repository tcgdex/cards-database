import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Minun",
		'fr-fr': "Negapi",
		'de-de': "Minun"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [312],

	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Lightning Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck jusqu'à 2 Pokémon de Base Lightning et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 -Basis-Pokémon-Karten und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Trash Charge",
				'fr-fr': "Charge d'ordures",
				'de-de': "Abfallaufladung"
			},
			effect: {
				'en-us': "Search your discard pile for a Lightning Energy card and attach it to 1 of your Pokémon.",
				'fr-fr': "Cherchez dans votre pile de défausse une carte Énergie Lightning et attachez-la à 1 de vos Pokémon.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 -Energiekarte und lege sie an 1 deiner Pokémon an."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It cheers on friends. If its friends are losing, its body lets off more and more sparks."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87490,
				cardmarket: 278762
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278762,
				tcgplayer: 87490
			}
		},
	],

}

export default card
