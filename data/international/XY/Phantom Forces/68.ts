import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
		'es-es': "Swirlix",
		'it-it': "Swirlix",
		'pt-br': "Swirlix",
		'de-de': "Flauschling"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		684,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Lick Away",
				'fr-fr': "Lèche-Lèche",
				'es-es': "Lametazo",
				'it-it': "Leccavia",
				'pt-br': "Lamber para Longe",
				'de-de': "Wegschlecken"
			},
			effect: {
				'en-us': "Remove all Special Conditions from this Pokémon.",
				'fr-fr': "Retirez tous les États Spéciaux de ce Pokémon.",
				'es-es': "Elimina todas las Condiciones Especiales de este Pokémon.",
				'it-it': "Rimuovi tutte le condizioni speciali da questo Pokémon.",
				'pt-br': "Remova todas as Condições Especiais deste Pokémon.",
				'de-de': "Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "To entangle its opponents in battle, it extrudes white threads as sweet and as sticky as cotton candy.",
	},

	thirdParty: {
		cardmarket: 281874,
		tcgplayer: 94636
	}
}

export default card
