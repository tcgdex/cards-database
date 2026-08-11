import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [218],

	name: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Yawn",
				'fr-fr': "Bâillement",
				'es-es': "Bostezo",
				'it-it': "Sbadiglio",
				'pt-br': "Bocejo",
				'de-de': "Gähner"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Flamboiement",
				'es-es': "Llama",
				'it-it': "Fiammata",
				'pt-br': "Chama",
				'de-de': "Flackern"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its body is made of magma. If it doesn't keep moving, its body will cool and harden."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511555,
				tcgplayer: 226398
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511555,
				tcgplayer: 226398
			}
		},
	],
}

export default card
