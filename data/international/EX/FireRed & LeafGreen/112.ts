import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Venusaur ex",
		'fr-fr': "Florizarre ex",
		'de-de': "Bisaflor ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Trans",
				'fr-fr': "Transfert d'Énergie",
				'de-de': "Energy Trans"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Venusaur ex is affected by a Special Condition.",
				'fr-fr': "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie  d'1 de vos Pokémon à 1 autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Florizarre ex est affecté par un État Spécial.",
				'de-de': "As often as you like during your turn (before yxour attack), mova a  Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Venusaur ex is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pollen Hazard",
				'fr-fr': "Pollen dangereux",
				'de-de': "Pollen Hazard"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned, Burned, and Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné, Brûlé et Confus.",
				'de-de': "The Defending Pokémon is now Poisoned, Burned, and Confused."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Solarbeam",
				'fr-fr': "Lance-soleil",
				'de-de': "Solarbeam"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276288,
				tcgplayer: 90323
			},
		},
	]
}

export default card
