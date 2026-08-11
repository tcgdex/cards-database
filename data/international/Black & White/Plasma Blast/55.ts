import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'pt-br': "Houndour",
		'de-de': "Hunduster"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Roar",
				'fr-fr': "Hurlement",
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Ambush",
				'fr-fr': "Embuscade",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is smart enough to hunt in packs. It uses a variety of cries for communicating with others.",
	},

	thirdParty: {
		cardmarket: 281076,
		tcgplayer: 86234
	}
}

export default card
