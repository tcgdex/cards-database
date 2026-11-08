import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Raticate",
		'fr-fr': "Rattatac",
		'es-es': "Raticate",
		'it-it': "Raticate",
		'pt-br': "Raticate",
		'de-de': "Rattikarl"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rattata",
		'fr-fr': "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Transfer Junk",
				'fr-fr': "Transfert de Camelote",
			},
			effect: {
				'en-us': "Put a Team Plasma Pokémon, a Team Plasma Trainer card, and a Team Plasma Energy card from your discard pile into your hand.",
				'fr-fr': "Ajoutez un Pokémon de la Team Plasma, une carte Dresseur de la Team Plasma et une carte Énergie de la Team Plasma de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "With its long fangs, this surprisingly violent Pokémon can gnaw away even thick concrete with ease.",
	},

	thirdParty: {
		cardmarket: 280966,
		tcgplayer: 88608
	}
}

export default card
