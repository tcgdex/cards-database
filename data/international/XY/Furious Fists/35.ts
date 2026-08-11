import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
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
				'en-us': "Sinister Suggestion",
				'fr-fr': "Suggestion Sinistre",
				'es-es': "Sugerencia Siniestra",
				'it-it': "Sinistra Illusione",
				'pt-br': "Sugestão Sinistra",
				'de-de': "Finsterer Vorschlag"
			},
			effect: {
				'en-us': "Whenever your opponent flips a coin during his or her next turn, treat it as tails.",
				'fr-fr': "Chaque fois que votre adversaire lance une pièce pendant son prochain tour, considérez que c'est pile.",
				'es-es': "Cada vez que tu rival lance una moneda durante su próximo turno, se considerará que ha salido cruz.",
				'it-it': "Ogni lancio della moneta del tuo avversario durante il suo prossimo turno verrà considerato croce.",
				'pt-br': "Sempre que seu oponente jogar uma moeda na próxima vez dele jogar, trate-a como coroa.",
				'de-de': "Immer wenn dein Gegner während seines nächsten Zuges 1 Münze wirft, wird das Ergebnis als \"Zahl\" gewertet."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
				'es-es': "Disparo Psi",
				'it-it': "Psicosparo",
				'pt-br': "Tiro Psíquico",
				'de-de': "Psychoschuss"
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

	description: {
		'en-us': "Puts enemies to sleep, then eats their dreams. Occasionally gets sick from eating only bad dreams.",
	},

	thirdParty: {
		cardmarket: 281699,
		tcgplayer: 92210
	}
}

export default card
