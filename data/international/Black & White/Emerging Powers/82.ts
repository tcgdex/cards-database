import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Unfezant",
		'fr-fr': "Déflaisan",
		'es-es': "Unfezant",
		'it-it': "Unfezant",
		'pt-br': "Unfezant",
		'de-de': "Fasasnob"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		521,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tailwind",
				'fr-fr': "Vent Arrière",
			},
			effect: {
				'en-us': "Attach an Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre main à 1 de vos Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Feather Strike",
				'fr-fr': "Tir de Plumes",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage. If tails, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires. Si c'est pile, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Males have plumage on their heads. They will never let themselves fell close to anyone other than their Trainers.",
	},

	thirdParty: {
		cardmarket: 280047,
		tcgplayer: 90160
	}
}

export default card
