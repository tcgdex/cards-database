import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Dewgong",
		'fr-fr': "Lamantine",
		'de-de': "Jugong"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		87,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Seel",
		'fr-fr': "Otaria"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Safeguard",
				'fr-fr': "Rune protectrice",
				'de-de': "Safeguard"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Dewgong by your opponent's Pokémon-ex.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Lamantine par le Pokémon-ex de votre adversaire.",
				'de-de': "Prevent all effects of attacks, including damage, done to Dewgong by your opponen´s Pokémon-ex."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Cold Breath",
				'fr-fr': "Souffle Froid",
				'de-de': "Cold Breath"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde boréale",
				'de-de': "Aurora Beam"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276179,
				tcgplayer: 84789
			},
		},
		{
			type: "holo",
			foil: "energy",
			thirdParty: {
				cardmarket: 276179,
				tcgplayer: 84789
			},
		}
	]
}

export default card
