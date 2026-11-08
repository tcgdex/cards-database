import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Dark Celebi",
		'fr-fr': "Celebi Obscur",
		'de-de': "Dunkles Celebi"
	},

	illustrator: "Ken Ikuji",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [251],

	hp: 70,

	types: [
		"Grass",
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dark Provide",
				'fr-fr': "Fournisseur d'obscurité",
				'de-de': "Dark Provide"
			},
			effect: {
				'en-us': "Attach up to 1 Grass or Darkness Energy card from your hand to your Pokémon.",
				'fr-fr': "Attachez à votre Pokémon jusqu'à 1 carte Énergie  ou  de votre main.",
				'de-de': "Attack up to 1  or  Energy card from your hand to your Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Darkness",
			],
			name: {
				'en-us': "Leaf Poison",
				'fr-fr': "Feuille-poison",
				'de-de': "Leaf Poison"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisened."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84571,
				cardmarket: 276078
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 84571,
				cardmarket: 276078
			}
		},
	]
}

export default card
