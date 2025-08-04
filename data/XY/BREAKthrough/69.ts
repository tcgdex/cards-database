import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia",
		de: "Kirlia"
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
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		it: "Ralts",
		pt: "Ralts",
		de: "Trasla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Beckon",
				fr: "Invite",
				es: "Hacer Señas",
				it: "Appello",
				pt: "Aceno",
				de: "Herbeiwinken"
			},
			effect: {
				en: "Put a Supporter card from your discard pile into your hand.",
				fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
				es: "Pon 1 carta de Partidario de tu pila de descartes en tu mano.",
				it: "Prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
				pt: "Coloque um card de Apoiador da sua pilha de descarte em sua mão.",
				de: "Nimm 1 Unterstützerkarte von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Turn",
				fr: "Vif Retournement",
				es: "Vuelta Rápida",
				it: "Virasvelto",
				pt: "Virada Rápida",
				de: "Schnelldrehung"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	thirdParty: {
		cardmarket: 286315,
		tcgplayer: 107188
	}
}

export default card
