import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Basculin",
		'fr-fr': "Bargantua",
		'es-es': "Basculin",
		'it-it': "Basculin",
		'pt-br': "Basculin",
		'de-de': "Barschuft"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		550,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Red and blue Basculin get along so poorly, they'll start fighting instantly. These Pokémon are very hostile.",
	},

	thirdParty: {
		cardmarket: 279773,
		tcgplayer: 83730
	}
}

export default card
