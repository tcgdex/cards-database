import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Garchomp-EX",
		'fr-fr': "Carchacrok-EX"
	},
	illustrator: "Ryo Ueda",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Shred",
				'fr-fr': "Déchiquetage"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],
	retreat: 2,






}

export default card
