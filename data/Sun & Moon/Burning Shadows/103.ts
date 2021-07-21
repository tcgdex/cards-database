import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
		es: "Porygon",
		it: "Porygon",
		pt: "Porygon",
		de: "Porygon"
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
				en: "Code Check",
				fr: "Vérification de Codes",
				es: "Comprobación de Código",
				it: "Controllo Codice",
				pt: "Verificar Código",
				de: "Code-Check"
			},
			effect: {
				en: "Look at 1 of your opponent’s face-down Prize cards.",
				fr: "Regardez l’une des cartes Récompense de votre adversaire (actuellement face cachée).",
				es: "Mira 1 de las cartas de Premio que están boca abajo de tu rival.",
				it: "Guarda una delle carte Premio coperte del tuo avversario.",
				pt: "Olhe 1 das cartas de Prêmio viradas para baixo do seu oponente.",
				de: "Schau dir 1 der verdeckten Preiskarten deines Gegners an."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Beam",
				fr: "Rayon",
				es: "Transmisión",
				it: "Raggio",
				pt: "Feixe",
				de: "Strahl"
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



}

export default card
