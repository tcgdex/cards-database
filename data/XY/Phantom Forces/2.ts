import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Venomoth",
		fr: "Aéromite",
		es: "Venomoth",
		it: "Venomoth",
		pt: "Venomoth",
		de: "Omot"
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
		en: "Venonat",
		fr: "Mimitoss",
		es: "Venonat",
		it: "Venonat",
		pt: "Venonat",
		de: "Bluzuk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Dizzying Wind",
				fr: "Vent Fou",
				es: "Viento Vertiginoso",
				it: "Stordivento",
				pt: "Vento Estonteante",
				de: "Wirrwind"
			},
			effect: {
				en: "Whenever your opponent plays a Trainer card from his or her hand during his or her next turn, your opponent flips a coin. If tails, that card has no effect. (Your opponent still discards that card.)",
				fr: "Chaque fois que votre adversaire joue une carte Dresseur de sa main pendant son prochain tour, votre adversaire lance une pièce. Si c'est pile, la carte Dresseur n'a aucun effet. (Votre adversaire défausse la carte.)",
				es: "Cada vez que tu rival juegue 1 carta de Entrenador de su mano durante su próximo turno, tu rival lanza 1 moneda. Si sale cruz, esa carta no tiene efecto. (Tu rival todavía descarta esa carta).",
				it: "Ogni volta che il tuo avversario gioca una carta Allenatore dalla sua mano durante il suo prossimo turno, il tuo avversario lancia una moneta. Se esce croce, quella carta non ha effetto (e il tuo avversario la scarta lo stesso).",
				pt: "Sempre que seu oponente jogar um card de Treinador da mão dele ou dela durante a próxima vez de jogar desse oponente, ele ou ela jogará uma moeda. Se sair coroa, o card não terá efeito algum. (Seu oponente descartará esse card mesmo assim.)",
				de: "Immer wenn dein Gegner während seines nächsten Zuges 1 Trainerkarte von seiner Hand spielt, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat diese Karte keine Auswirkungen. (Dein Gegner legt diese Karte trotzdem auf seinen Ablagestapel.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Noxious Scales",
				fr: "Écailles Nocives",
				es: "Escamas Dañinas",
				it: "Malespora",
				pt: "Escamas Venenosas",
				de: "Giftige Schuppen"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
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

	thirdParty: {
		cardmarket: 281803,
		tcgplayer: 94135
	}
}

export default card
