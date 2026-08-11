import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'de-de': "Skaraborn"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [214],

	hp: 70,

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
				'en-us': "Extra Draw",
				'fr-fr': "Pioche supplémentaire",
				'de-de': "Extra Draw"
			},
			effect: {
				'en-us': "If your opponent has any Pokémon-ex in play, search your deck for up to 2 Grass Energy cards and attach them to Heracross. Shuffle your deck afterward.",
				'fr-fr': "Si votre adversaire a des Pokémon-ex en jeu, cherchez dans votre deck jusqu'à 2 cartes Énergie  et attachez-les à Scarhino. Ensuite, mélangez votre deck.",
				'de-de': "If your opponent has any Pokémon-ex in play, search your deck for up to 2  Energy cards and attach them to Heracross. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sonicboom",
				'fr-fr': "Sonicboom",
				'de-de': "Sonicboom"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "This attack's damage isn't affected by Weakness or Resistance."
			},
			damage: 50,

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
				tcgplayer: 86062,
				cardmarket: 276081
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 86062,
				cardmarket: 276081
			}
		},
	]
}

export default card
