import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Cryogonal",
		'fr-fr': "Hexagel",
		'es-es': "Cryogonal",
		'it-it': "Cryogonal",
		'pt-br': "Cryogonal",
		'de-de': "Frigometri"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Ice Chain",
				'fr-fr': "Chaîne de Glace",
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Frost Vanish",
				'fr-fr': "Poudreuse d'Escampette",
			},
			effect: {
				'en-us': "You may return this Pokémon and all cards attached to it to your hand.",
				'fr-fr': "Vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
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

	retreat: 1,

	description: {
		'en-us': "They are born in snow clouds. They use chains made of ice crystals to capture prey.",
	},

	thirdParty: {
		cardmarket: 280155,
		tcgplayer: 84513
	}
}

export default card
