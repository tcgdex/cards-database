import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'de-de': "Spoink"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [325],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sleep Pearl",
				'fr-fr': "Perle dodo",
				'de-de': "Schlafperle"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep. Switch Spoink with 1 of your Benched Pokémon.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi. Échangez Spoink avec l’un de vos Pokémon de Banc.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt. Tausche Spoink gegen 1 Pokémon auf deiner Bank aus."
			},

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
		'en-us': "It bounces around on its tail to keep its heart pumping. It carries a pearl from Clamperl on its head."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89478,
				cardmarket: 279607
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279607,
				tcgplayer: 89478
			}
		},
	],

}

export default card
