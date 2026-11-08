import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [256],

	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'es-es': "Combusken",
		'it-it': "Combusken",
		'pt-br': "Combusken",
		'de-de': "Jungglut"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'es-es': "Torchic",
		'it-it': "Torchic",
		'pt-br': "Torchic",
		'de-de': "Flemmli"
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud'Pattes",
				'es-es': "Patada Destrucción",
				'it-it': "Calcio Esplosivo",
				'pt-br': "Chute Poderoso",
				'de-de': "Schmetterkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Beak",
				'fr-fr': "Bec Thermique",
				'es-es': "Pico Ígneo",
				'it-it': "Becco Infuocato",
				'pt-br': "Bico de Calor",
				'de-de': "Hitzeschnabel"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "During a battle, the hot flame in its body increases. Its kicks have outstanding destructive power."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482989,
				tcgplayer: 219236
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482989,
				tcgplayer: 219236
			}
		},
	],
}

export default card
