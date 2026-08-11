import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
		'es-es': "Patrat",
		'it-it': "Patrat",
		'pt-br': "Patrat",
		'de-de': "Nagelotz"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		504,
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
				'en-us': "Safety Check",
				'fr-fr': "Contrôle de Sécurité",
				'es-es': "Control de Seguridad",
				'it-it': "Controllo Sicurezza",
				'pt-br': "Verificação de Segurança",
				'de-de': "Sicherheitscheck"
			},
			effect: {
				'en-us': "Look at 1 of your face-down Prize cards.",
				'fr-fr': "Regardez l'une de vos cartes Récompense face cachée.",
				'es-es': "Mira 1 de tus cartas de Premio que están boca abajo.",
				'it-it': "Guarda una delle tue carte Premio coperte.",
				'pt-br': "Veja um dos seus cards de Prêmio que estão voltados para baixo.",
				'de-de': "Sieh dir 1 deiner verdeckten Preiskarten an."
			},

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
		'en-us': "Using food stored in cheek pouches, they can keep watch for days. They use their tails to communicate with others.",
	},

	thirdParty: {
		cardmarket: 281748,
		tcgplayer: 92264
	}
}

export default card
