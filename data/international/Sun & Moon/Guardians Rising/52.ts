import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Gothita",
		'fr-fr': "Scrutella",
		'es-es': "Gothita",
		'it-it': "Gothita",
		'pt-br': "Gothita",
		'de-de': "Mollimorba"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		574,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Blown Kiss",
				'fr-fr': "Baiser Volé",
				'es-es': "Beso al Viento",
				'it-it': "Bacio Smack",
				'pt-br': "Beijo Soprado",
				'de-de': "Küsschen"
			},
			effect: {
				'en-us': "Put 1 damage counter on 1 of your opponent’s Pokémon.",
				'fr-fr': "Placez un marqueur de dégâts sur l’un des Pokémon de votre adversaire.",
				'es-es': "Pon 1 contador de daño en 1 de los Pokémon de tu rival.",
				'it-it': "Metti un segnalino danno su uno dei Pokémon del tuo avversario.",
				'pt-br': "Coloque 1 contador de dano em 1 dos Pokémon do seu oponente.",
				'de-de': "Lege 1 Schadensmarke auf 1 Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Their ribbonlike feelers increase their psychic power. They are always staring at something.",
	},

	thirdParty: {
		cardmarket: 297514,
		tcgplayer: 130958
	}
}

export default card
