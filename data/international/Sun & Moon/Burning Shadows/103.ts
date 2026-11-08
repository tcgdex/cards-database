import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Code Check",
				'fr-fr': "Vérification de Codes",
				'es-es': "Comprobación de Código",
				'it-it': "Controllo Codice",
				'pt-br': "Verificar Código",
				'de-de': "Code-Check"
			},
			effect: {
				'en-us': "Look at 1 of your opponent’s face-down Prize cards.",
				'fr-fr': "Regardez l’une des cartes Récompense de votre adversaire (actuellement face cachée).",
				'es-es': "Mira 1 de las cartas de Premio que están boca abajo de tu rival.",
				'it-it': "Guarda una delle carte Premio coperte del tuo avversario.",
				'pt-br': "Olhe 1 das cartas de Prêmio viradas para baixo do seu oponente.",
				'de-de': "Schau dir 1 der verdeckten Preiskarten deines Gegners an."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Beam",
				'fr-fr': "Rayon",
				'es-es': "Transmisión",
				'it-it': "Raggio",
				'pt-br': "Feixe",
				'de-de': "Strahl"
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

	retreat: 1,

	description: {
		'en-us': "Roughly 20 years ago, it was artificially created, utilizing the latest technology of the time.",
	},

	thirdParty: {
		cardmarket: 299504,
		tcgplayer: 138599
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
