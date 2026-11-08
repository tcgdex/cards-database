import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Cacnea",
		'fr-fr': "Cacnea de Team Aqua",
		'de-de': "Team Aquas Tuska"
	},

	illustrator: "K. Utsunomiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [331],

	hp: 50,

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
				'en-us': "Paralyzing Gaze",
				'fr-fr': "Regard paralysant",
				'de-de': "Paralyzing Gaze"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pin Missile",
				'fr-fr': "Dard-nuée",
				'de-de': "Pin Missile"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 4 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

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
			type: "normal",
			thirdParty: {
				cardmarket: 275801,
				tcgplayer: 89774
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275801,
				tcgplayer: 89774
			}
		},
		{
			type: "normal",
			stamp: ["pre-release"],
			thirdParty: {
				cardmarket: 881780,
				tcgplayer: 282798
			}
		},
	],

}

export default card
