import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Detective Pikachu",
		'fr-fr': "Détective Pikachu",
		'es-es': "Detective Pikachu",
		'it-it': "Detective Pikachu",
		'pt-br': "Detective Pikachu",
		'de-de': "Meisterdetektiv Pikachu"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Scout",
			'fr-fr': "Espionnage",
			'es-es': "Explorar",
			'it-it': "Esplorazione",
			'pt-br': "Explorador",
			'de-de': "Späher"
		},

		effect: {
			'en-us': "Your opponent reveals their hand.",
			'fr-fr': "Votre adversaire dévoile sa main.",
			'es-es': "Tu rival enseña las cartas de su mano.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano.",
			'pt-br': "Seu oponente revela a própria mão.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten."
		},

		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'es-es': "Ataque Sorpresa",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Ataque Surpresa",
			'de-de': "Überraschungsangriff"
		},

		damage: 80,

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
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

	retreat: 2,

	description: {
		'en-us': "He loves to show off his vast knowledge. This expressive Pikachu is like a middle-aged man.",
	},
}

export default card
