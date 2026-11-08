import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'de-de': "Heiteira"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [242],

	hp: 120,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Happy Healing",
				'fr-fr': "Joyeux soin",
				'de-de': "Happy Healing"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), choose 1 of your Benched Pokémon and flip a coin. If heads, count the number of Energy attached to Blissey and then remove that many damage counters from the chosen Benched Pokémon. This power can't be used if Blissey is affected by a Special Condition.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), choisissez 1 des Pokémon de votre Banc et lancez une pièce. Si c'est face, comptez le nombre d'Énergies attachées à Leuphorie et retirez ensuite autant de marqueurs de dégâts du Pokémon du Banc que vous avez choisi. Ce pouvoir ne peut pas être utilisé si Leuphorie est affecté par un État spécial.",
				'de-de': "Once during your turn (before your attack), choose 1 of your Benched Pokémon and flip a coin. If heads, count the number of Energy attached to Blissey and then remove that many damage counters from the chosen Benched Pokémon. This power can't be used if Blissey is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Smash Bomber",
				'fr-fr': "Bombard'éclate",
				'de-de': "Smash Bomber"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83920,
				cardmarket: 275078
			}
		},
	]
}

export default card
