import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Venomoth",
		'fr-fr': "Aéromite",
		'es-es': "Venomoth",
		'it-it': "Venomoth",
		'pt-br': "Venomoth",
		'de-de': "Omot"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
		'es-es': "Venonat",
		'it-it': "Venonat",
		'pt-br': "Venonat",
		'de-de': "Bluzuk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Dizzying Wind",
				'fr-fr': "Vent Fou",
				'es-es': "Viento Vertiginoso",
				'it-it': "Stordivento",
				'pt-br': "Vento Estonteante",
				'de-de': "Wirrwind"
			},
			effect: {
				'en-us': "Whenever your opponent plays a Trainer card from his or her hand during his or her next turn, your opponent flips a coin. If tails, that card has no effect. (Your opponent still discards that card.)",
				'fr-fr': "Chaque fois que votre adversaire joue une carte Dresseur de sa main pendant son prochain tour, votre adversaire lance une pièce. Si c'est pile, la carte Dresseur n'a aucun effet. (Votre adversaire défausse la carte.)",
				'es-es': "Cada vez que tu rival juegue 1 carta de Entrenador de su mano durante su próximo turno, tu rival lanza 1 moneda. Si sale cruz, esa carta no tiene efecto. (Tu rival todavía descarta esa carta).",
				'it-it': "Ogni volta che il tuo avversario gioca una carta Allenatore dalla sua mano durante il suo prossimo turno, il tuo avversario lancia una moneta. Se esce croce, quella carta non ha effetto (e il tuo avversario la scarta lo stesso).",
				'pt-br': "Sempre que seu oponente jogar um card de Treinador da mão dele ou dela durante a próxima vez de jogar desse oponente, ele ou ela jogará uma moeda. Se sair coroa, o card não terá efeito algum. (Seu oponente descartará esse card mesmo assim.)",
				'de-de': "Immer wenn dein Gegner während seines nächsten Zuges 1 Trainerkarte von seiner Hand spielt, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat diese Karte keine Auswirkungen. (Dein Gegner legt diese Karte trotzdem auf seinen Ablagestapel.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Noxious Scales",
				'fr-fr': "Écailles Nocives",
				'es-es': "Escamas Dañinas",
				'it-it': "Malespora",
				'pt-br': "Escamas Venenosas",
				'de-de': "Giftige Schuppen"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The scales it scatters will paralyze anyone who touches them, making that person unable to stand.",
	},

	thirdParty: {
		cardmarket: 281803,
		tcgplayer: 94135
	}
}

export default card
