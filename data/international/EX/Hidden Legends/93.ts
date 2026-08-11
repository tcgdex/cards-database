import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Groudon ex",
		'fr-fr': "Groudon ex",
		'de-de': "Groudon ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [383],

	hp: 100,

	stage: "Basic",
	types: [
		"Fighting"
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Mark of Antiquity",
				'fr-fr': "Marque d'antiquité",
				'de-de': "Mark of Antiquity"
			},
			effect: {
				'en-us': "As long as Groudon ex is your Active Pokémon, each player's Kyogre ex and Rayquaza ex can't attack.",
				'fr-fr': "Tant que Groudon ex est votre Pokémon Actif, les Kyogre ex et Rayquaza ex de chaque Joueur ne peuvent pas attaquer.",
				'de-de': "As long as Groudon ex is your Active Pokémon, each player's Kyogre ex and Rayquaza ex can't attack."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-pierre",
				'de-de': "Rock Tumble"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "This attack's damage is not affected by Resistance."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Crushing Mantle",
				'fr-fr': "Cape écrasante",
				'de-de': "Crushing Mantle"
			},
			effect: {
				'en-us': "You may discard from your hand as many Energy cards as you like. If you do, this attack does 50 damage plus 10 more damage for each Energy card you discarded.",
				'fr-fr': "Vous pouvez défausser de votre main autant de cartes Énergie que vous le voulez. Cette attaque inflige alors 50 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie défaussée.",
				'de-de': "You may discard from your hand as many Energy cards as you like. If you do, this attack does 50 damage plus 10 more damage for each Energy card you discarded."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 3,

	variants: [
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 85929,
				cardmarket: 276167
			}
		},
	]
}

export default card
