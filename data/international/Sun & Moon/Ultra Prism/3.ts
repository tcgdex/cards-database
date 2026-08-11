import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'es-es': "Yanmega",
		'it-it': "Yanmega",
		'pt-br': "Yanmega",
		'de-de': "Yanmega"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'es-es': "Supersónico",
				'it-it': "Supersuono",
				'pt-br': "Supersônico",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cutting Wind",
				'fr-fr': "Vent Glacial",
				'es-es': "Viento Helado",
				'it-it': "Vento Tagliente",
				'pt-br': "Vento Dilacerante",
				'de-de': "Schneidender Wind"
			},

			damage: 120,

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

	retreat: 1,

	description: {
		'en-us': "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.",
	},

	thirdParty: {
		cardmarket: 315935,
		tcgplayer: 157620
	}
}

export default card
