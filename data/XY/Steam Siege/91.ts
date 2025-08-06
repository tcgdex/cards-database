import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Ambipom",
		fr: "Capidextre",
		es: "Ambipom",
		it: "Ambipom",
		pt: "Ambipom",
		de: "Ambidiffel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		424,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Aipom",
		fr: "Capumain",
		es: "Aipom",
		it: "Aipom",
		pt: "Aipom",
		de: "Griffel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Furry Chance",
				fr: "Chance Fourrure",
				es: "Oportunidad Peluda",
				it: "Fortunpelo",
				pt: "Oportunidade Peluda",
				de: "Haarige Chance"
			},
			effect: {
				en: "Discard the top card of your opponent's deck. If that card is an Energy card, this attack does 60 more damage.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si c'est une carte Énergie, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Descarta la primera carta de la baraja de tu rival. Si es una carta de Energía, este ataque hace 60 puntos de daño más.",
				it: "Scarta la carta in cima al mazzo del tuo avversario. Se è una carta Energia, questo attacco infligge 60 danni in più.",
				pt: "Descarte o card de cima do baralho do seu oponente. Se aquele card for um card de Energia, este ataque causará 60 de danos adicionais.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Falls es eine Energiekarte ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Hit",
				fr: "Coup Double",
				es: "Doble Golpe",
				it: "Doppiosmash",
				pt: "Golpe Duplo",
				de: "Doppelschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 50 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 291651,
		tcgplayer: 121217
	}
}

export default card
