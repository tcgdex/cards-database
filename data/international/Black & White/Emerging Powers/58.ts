import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Throh",
		'fr-fr': "Judokrak",
		'es-es': "Throh",
		'it-it': "Throh",
		'pt-br': "Throh",
		'de-de': "Jiutesto"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		538,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Scarf Hold",
				'fr-fr': "Kesa-Gatame",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When it tightens its belt, it becomes stronger. Wild Throh use vines to weave their own belts.",
	},

	thirdParty: {
		cardmarket: 280023,
		tcgplayer: 89900
	}
}

export default card
