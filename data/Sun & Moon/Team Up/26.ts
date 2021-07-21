import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		es: "Psyduck",
		it: "Psyduck",
		pt: "Psyduck",
		de: "Enton"
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
				en: "Headache",
				fr: "Migraine",
				es: "Dolor de Cabeza",
				it: "Emicrania",
				pt: "Dor de Cabeça",
				de: "Kopfweh"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can’t play any Trainer cards from their hand during their next turn.",
				fr: "Lancez une pièce. Si c’est face, votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour.",
				es: "Lanza 1 moneda. Si sale cara, tu rival no puede jugar ninguna carta de Entrenador de su mano durante su próximo turno.",
				it: "Lancia una moneta. Se esce testa, il tuo avversario non può giocare le carte Allenatore che ha in mano durante il suo prossimo turno.",
				pt: "Jogue 1 moeda. Se sair cara, seu oponente não poderá jogar nenhuma carta de Treinador da própria mão durante a próxima vez dele(a) jogar.",
				de: "Wirf 1 Münze. Bei Kopf kann dein Gegner während seines nächsten Zuges keine Trainerkarten aus seiner Hand spielen."
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



}

export default card
