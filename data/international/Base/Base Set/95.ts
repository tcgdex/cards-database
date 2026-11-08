import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Switch",
		'fr-fr': "Transfert",
		'de-de': "Tausch",
		'it-it': "Scambio"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Switch 1 of your own Benched Pokémon with your Active Pokémon.",
		'fr-fr': "Échangez 1 Pokémon de votre Banc avec votre Pokémon actif.",
		'de-de': "Tausche eines Deiner Pokémon auf der Bank mit Deinem aktiven Pokémon aus.",
		'it-it': "Scambia uno dei tuoi Pokémon in Panchina con il tuo Pokémon Attivo."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273790,
				tcgplayer: 42439
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107092
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107092
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
