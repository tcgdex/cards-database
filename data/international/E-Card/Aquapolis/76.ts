import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Nœufnœuf",
		'de-de': "Owei"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [102],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Growth Spurt",
				'fr-fr': "Jaillissement",
				'de-de': "Wachstumsschub"
			},
			effect: {
				'en-us': "Attach an Energy card from your hand to Exeggcute.",
				'fr-fr': "Attachez une cartes Énergie de votre main à Nœufnœuf.",
				'de-de': "Lege eine Energiekarte aus deiner Hand an Owei an."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Powder",
				'fr-fr': "Poudre dodo",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85344,
				cardmarket: 275150
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85344,
				cardmarket: 275150
			}
		},
	]
}

export default card
