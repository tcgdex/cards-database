import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		96,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sinister Suggestion",
				fr: "Suggestion Sinistre",
				es: "Sugerencia Siniestra",
				it: "Sinistra Illusione",
				pt: "Sugestão Sinistra",
				de: "Finsterer Vorschlag"
			},
			effect: {
				en: "Whenever your opponent flips a coin during his or her next turn, treat it as tails.",
				fr: "Chaque fois que votre adversaire lance une pièce pendant son prochain tour, considérez que c'est pile.",
				es: "Cada vez que tu rival lance una moneda durante su próximo turno, se considerará que ha salido cruz.",
				it: "Ogni lancio della moneta del tuo avversario durante il suo prossimo turno verrà considerato croce.",
				pt: "Sempre que seu oponente jogar uma moeda na próxima vez dele jogar, trate-a como coroa.",
				de: "Immer wenn dein Gegner während seines nächsten Zuges 1 Münze wirft, wird das Ergebnis als \"Zahl\" gewertet."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
				es: "Disparo Psi",
				it: "Psicosparo",
				pt: "Tiro Psíquico",
				de: "Psychoschuss"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
