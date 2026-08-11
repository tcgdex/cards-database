import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'es-es': "Lopunny",
		'it-it': "Lopunny",
		'pt-br': "Lopunny",
		'de-de': "Schlapor"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		428,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Healing Melody",
				'fr-fr': "Mélodie Apaisante",
			},
			effect: {
				'en-us': "Flip a coin. If heads, heal 60 damage from each of your Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, soignez 60 dégâts à chacun de vos Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Kick Away",
				'fr-fr': "Coud'Pied Éjecteur",
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Extremely cautious, it quickly bounds off when it senses danger.",
	},

	thirdParty: {
		cardmarket: 280704,
		tcgplayer: 86828
	}
}

export default card
