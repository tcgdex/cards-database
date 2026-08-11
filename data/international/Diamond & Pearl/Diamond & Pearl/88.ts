import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Marill",
		'fr-fr': "Marill",
		'de-de': "Marill"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		183,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},
			effect: {
				'en-us': "If Marill is evolved from Azurill, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Si Marill évolue d'Azurill, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn Marill sich aus Azurill entwickelt hat, fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Splashing Turn",
				'fr-fr': "Tour éclaboussant",
				'de-de': "Platschende Drehung"
			},
			effect: {
				'en-us': "Switch Marill with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Marill avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Marill gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Using its tail as a float, it dives underwater. It likes eating plants that grow on river bottoms.",
		'fr-fr': "Il plonge sous l'eau en utilisant sa queue comme un flotteur. Il aime les plantes du fond des rivières."
	},

	thirdParty: {
		cardmarket: 277587,
		tcgplayer: 87218
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
