import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'de-de': "Schiggy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [7],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Shell Retreat",
				'fr-fr': "Rentrer dans sa coquille",
				'de-de': "Shell Retreat"
			},
			effect: {
				'en-us': "As long as Squirtle has any Energy cards attached to it, damage done to Squirtle by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tant que Carapuce possède des cartes Énergie, les dégâts qui lui sont infligés par une attaque de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "As long as Squirtle has any Energy cards attached to it, damage done to Squirtle by an opponent's attack is reduced by 10 (after applying Weakness and Resistance)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
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
				cardmarket: 275823,
				tcgplayer: 89488
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275823,
				tcgplayer: 89488
			}
		},
	],

}

export default card
