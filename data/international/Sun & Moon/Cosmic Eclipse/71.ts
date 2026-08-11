import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		170,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scout",
				'fr-fr': "Espionnage",
				'es-es': "Explorar",
				'it-it': "Esplorazione",
				'pt-br': "Explorador",
				'de-de': "Späher"
			},
			effect: {
				'en-us': "Your opponent reveals their hand.",
				'fr-fr': "Votre adversaire dévoile sa main.",
				'es-es': "Tu rival enseña las cartas de su mano.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano.",
				'pt-br': "Seu oponente revela a própria mão.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Razor Fin",
				'fr-fr': "Aileron-Rasoir",
				'es-es': "Aleta Afilada",
				'it-it': "Pinnalama",
				'pt-br': "Barbatana Cortante",
				'de-de': "Rasierflosse"
			},

			damage: 10,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its two antennae glow softly to lure in prey, making it a useful Pokémon for night fishing.",
	},

	thirdParty: {
		cardmarket: 408004,
		tcgplayer: 201245
	}
}

export default card
