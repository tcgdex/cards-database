import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		281,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Beckon",
				'fr-fr': "Invite",
				'es-es': "Hacer Señas",
				'it-it': "Appello",
				'pt-br': "Aceno",
				'de-de': "Herbeiwinken"
			},
			effect: {
				'en-us': "Put a Supporter card from your discard pile into your hand.",
				'fr-fr': "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
				'es-es': "Pon 1 carta de Partidario de tu pila de descartes en tu mano.",
				'it-it': "Prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
				'pt-br': "Coloque um card de Apoiador da sua pilha de descarte em sua mão.",
				'de-de': "Nimm 1 Unterstützerkarte von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Turn",
				'fr-fr': "Vif Retournement",
				'es-es': "Vuelta Rápida",
				'it-it': "Virasvelto",
				'pt-br': "Virada Rápida",
				'de-de': "Schnelldrehung"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a psychic power that enables it to distort the space around it and see into the future.",
	},

	thirdParty: {
		cardmarket: 286315,
		tcgplayer: 107188
	}
}

export default card
