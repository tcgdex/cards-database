import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Sumiyoshi Kizuki",

	attacks: [{
		name: {
			en: "Tailwind Draw",
			fr: "Pioche en Poupe",
			es: "Robo de Viento Afín",
			it: "Pescata Ventoincoda",
			pt: "Tailwind Draw",
			de: "Rückenwindzug"
		},

		effect: {
			en: "Draw a card. If you go second and it’s your first turn, draw 3 more cards.",
			fr: "Piochez une carte. Si vous jouez en second et que c’est votre premier tour, piochez 3 cartes supplémentaires.",
			es: "Roba 1 carta. Si sales segundo y es tu primer turno, roba 3 cartas más.",
			it: "Pesca una carta. Se inizi per secondo ed è il tuo primo turno, pesca altre tre carte.",
			pt: "Draw a card. If you go second and it’s your first turn, draw 3 more cards.",
			de: "Ziehe 1 Karte. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, ziehe 3 Karten mehr."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			es: "Ataque Sorpresa",
			it: "Attacco a Sorpresa",
			pt: "Surprise Attack",
			de: "Überraschungsangriff"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Flip a coin. If tails, this attack does nothing.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card