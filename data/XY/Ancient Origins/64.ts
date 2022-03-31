import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
		es: "Porygon",
		it: "Porygon",
		pt: "Porygon",
		de: "Porygon"
	},
	illustrator: "Yukiko Baba",
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
				en: "Data Check",
				fr: "Vérification de Données",
				es: "Comprobación de Datos",
				it: "Controllo Dati",
				pt: "Verificação de Dados",
				de: "Datenprüfung"
			},
			effect: {
				en: "Look through your deck. Shuffle your deck afterward.",
				fr: "Parcourez votre deck. Mélangez ensuite votre deck.",
				es: "Examina las cartas de tu baraja. Baraja las cartas de tu baraja después.",
				it: "Guarda e poi rimischia le carte del tuo mazzo.",
				pt: "Consulte o seu baralho. Em seguida, embaralhe seus cards.",
				de: "Sieh dir die Karten deines Decks an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharpen",
				fr: "Affûtage",
				es: "Afilar",
				it: "Affilatore",
				pt: "Afiar",
				de: "Schärfer"
			},

			damage: 20,

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
