import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Detective Pikachu",
		fr: "Détective Pikachu",
		es: "Detective Pikachu",
		it: "Detective Pikachu",
		pt: "Detective Pikachu",
		de: "Meisterdetektiv Pikachu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Scout",
			fr: "Espionnage",
			es: "Explorar",
			it: "Esplorazione",
			pt: "Explorador",
			de: "Späher"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main.",
			es: "Tu rival enseña las cartas de su mano.",
			it: "Il tuo avversario mostra le carte che ha in mano.",
			pt: "Seu oponente revela a própria mão.",
			de: "Dein Gegner zeigt dir seine Handkarten."
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
			es: "Ataque Sorpresa",
			it: "Attacco a Sorpresa",
			pt: "Ataque Surpresa",
			de: "Überraschungsangriff"
		},

		damage: 80,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	retreat: 2
}

export default card