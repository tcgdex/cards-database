import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'de-de': "Camaub"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [322],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Draw In",
				'fr-fr': "Attirer",
				'de-de': "Ansaugen"
			},
			effect: {
				'en-us': "Search your discard pile for up to 2 Fire Energy cards and attach them to Numel.",
				'fr-fr': "Cherchez dans votre pile de défausse jusqu'à 2 cartes Énergie Fire et attachez-les à Chamallot.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 2 -Energiekarten und lege sie an Camaub an."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'de-de': "Glühen"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "Its humped back stores intensely hot magma. In rain, the magma cools, slowing its movement."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87815,
				cardmarket: 278765
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278765,
				tcgplayer: 87815
			}
		},
	],

}

export default card
