import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headache",
				'fr-fr': "Migraine",
				'es-es': "Dolor de Cabeza",
				'it-it': "Emicrania",
				'pt-br': "Dor de Cabeça",
				'de-de': "Kopfweh"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can’t play any Trainer cards from their hand during their next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour.",
				'es-es': "Lanza 1 moneda. Si sale cara, tu rival no puede jugar ninguna carta de Entrenador de su mano durante su próximo turno.",
				'it-it': "Lancia una moneta. Se esce testa, il tuo avversario non può giocare le carte Allenatore che ha in mano durante il suo prossimo turno.",
				'pt-br': "Jogue 1 moeda. Se sair cara, seu oponente não poderá jogar nenhuma carta de Treinador da própria mão durante a próxima vez dele(a) jogar.",
				'de-de': "Wirf 1 Münze. Bei Kopf kann dein Gegner während seines nächsten Zuges keine Trainerkarten aus seiner Hand spielen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Using psychokinesis gives it a headache, so it normally passes the time spacing out and doing as little as possible.",
	},

	thirdParty: {
		cardmarket: 368958,
		tcgplayer: 183797
	}
}

export default card
