import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [607],

	name: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Scorch",
				'fr-fr': "Brûler",
				'es-es': "Calcinar",
				'it-it': "Ustione",
				'pt-br': "Chamuscar",
				'de-de': "Versengen"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Fire"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "The flame on its head keeps its body slightly warm. This Pokémon takes lost children by the hand to guide them to the spirit world."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457613,
				tcgplayer: 213107
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457613,
				tcgplayer: 213107
			}
		},
	],
}

export default card
