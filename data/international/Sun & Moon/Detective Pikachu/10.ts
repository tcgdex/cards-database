import { Card } from 'models/database/card'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		'en-us': "Detective Pikachu",
		'fr-fr': "Détective Pikachu",
		'es-es': "Detective Pikachu",
		'it-it': "Detective Pikachu",
		'pt-br': "Detective Pikachu",
		'de-de': "Meisterdetektiv Pikachu"
	},

	illustrator: "MPC Film",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
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

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque Surprise",
				'es-es': "Ataque Sorpresa",
				'it-it': "Attacco a Sorpresa",
				'pt-br': "Ataque Surpresa",
				'de-de': "Überraschungsangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "He loves to show off his vast knowledge. This expressive Pikachu is like a middle-aged man.",
	},

	thirdParty: {
		cardmarket: 370774,
		tcgplayer: 186015
	}
}

export default card
