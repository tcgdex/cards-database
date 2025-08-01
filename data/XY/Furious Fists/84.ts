import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
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
				en: "Safety Check",
				fr: "Contrôle de Sécurité",
				es: "Control de Seguridad",
				it: "Controllo Sicurezza",
				pt: "Verificação de Segurança",
				de: "Sicherheitscheck"
			},
			effect: {
				en: "Look at 1 of your face-down Prize cards.",
				fr: "Regardez l'une de vos cartes Récompense face cachée.",
				es: "Mira 1 de tus cartas de Premio que están boca abajo.",
				it: "Guarda una delle tue carte Premio coperte.",
				pt: "Veja um dos seus cards de Prêmio que estão voltados para baixo.",
				de: "Sieh dir 1 deiner verdeckten Preiskarten an."
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

	thirdParty: {
		cardmarket: 281748
	}
}

export default card
