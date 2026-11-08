import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [755],

	name: {
		'en-us': "Morelull",
		'fr-fr': "Spododo",
		'es-es': "Morelull",
		'it-it': "Morelull",
		'pt-br': "Morelull",
		'de-de': "Bubungus"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spore",
				'fr-fr': "Spore",
				'es-es': "Espora",
				'it-it': "Spora",
				'pt-br': "Esporos",
				'de-de': "Pilzspore"
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
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Flop",
				'fr-fr': "Flop",
				'es-es': "Vuelta",
				'it-it': "Tonfo",
				'pt-br': "Baque",
				'de-de': "Plumps"
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

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Pokémon living in the forest eat the delicious caps on Morelull's head. The caps regrow overnight."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483274,
				tcgplayer: 219464
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483274,
				tcgplayer: 219464
			}
		},
	],
}

export default card
