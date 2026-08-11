import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'de-de': "Skorgla"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		207,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Free Flight",
				'fr-fr': "Vol gratuit",
				'de-de': "Free Flight"
			},
			effect: {
				'en-us': "If Gligar has no Energy attached to it, Gligar's Retreat Cost is 0.",
				'fr-fr': "Si Scorplane ne possède pas d'Énergie, son Coût de retraite est de 0.",
				'de-de': "If Gligar has no Energy attached to it, Gligar's Retreat Cost is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Toxic Grip",
				'fr-fr': "Pince empoisonnée",
				'de-de': "Toxic Grip"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85765,
				cardmarket: 276703
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85765,
				cardmarket: 276703
			},
		}
	],
}

export default card
