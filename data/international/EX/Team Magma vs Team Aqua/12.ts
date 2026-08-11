import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Torkoal",
		'fr-fr': "Chartor de Team Magma",
		'de-de': "Team Magmas Qurtel"
	},

	illustrator: "K. Hoshiba",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [324],

	hp: 80,

	types: [
		"Fire",
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Magma Burn",
				'fr-fr': "Brûlure de Magma",
				'de-de': "Magma Burn"
			},
			effect: {
				'en-us': "Discard the top card from your opponent's deck, and flip a coin. If tails, discard a Fire Energy attached to Team Magma's Torkoal.",
				'fr-fr': "Défaussez la première carte du deck de votre adversaire et lancez une pièce. Si c'est pile, défaussez une Énergie  attachée à Chartor de Team Magma.",
				'de-de': "Discard the top card from your opponent's deck, and flip a coin. If tails, discard a  Energy attached to Team Magma's Torkoal."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Hot Air",
				'fr-fr': "Air chaud",
				'de-de': "Hot Air"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to Team Magma's Torkoal and your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				'fr-fr': "Défaussez une Énergie  attachée à Chartor de Team Magma. Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc, s'il en a.",
				'de-de': "Discard a  Energy attached to Team Magma's Torkoal, and your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275789,
				tcgplayer: 89845
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275789,
				tcgplayer: 89845
			}
		},
	],

}

export default card
