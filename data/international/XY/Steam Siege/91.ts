import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Ambipom",
		'fr-fr': "Capidextre",
		'es-es': "Ambipom",
		'it-it': "Ambipom",
		'pt-br': "Ambipom",
		'de-de': "Ambidiffel"
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
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Furry Chance",
				'fr-fr': "Chance Fourrure",
				'es-es': "Oportunidad Peluda",
				'it-it': "Fortunpelo",
				'pt-br': "Oportunidade Peluda",
				'de-de': "Haarige Chance"
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck. If that card is an Energy card, this attack does 60 more damage.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire. Si c'est une carte Énergie, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Descarta la primera carta de la baraja de tu rival. Si es una carta de Energía, este ataque hace 60 puntos de daño más.",
				'it-it': "Scarta la carta in cima al mazzo del tuo avversario. Se è una carta Energia, questo attacco infligge 60 danni in più.",
				'pt-br': "Descarte o card de cima do baralho do seu oponente. Se aquele card for um card de Energia, este ataque causará 60 de danos adicionais.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Falls es eine Energiekarte ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
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
				'en-us': "Double Hit",
				'fr-fr': "Coup Double",
				'es-es': "Doble Golpe",
				'it-it': "Doppiosmash",
				'pt-br': "Golpe Duplo",
				'de-de': "Doppelschlag"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 50 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	description: {
		'en-us': "To eat, it deftly shucks nuts with its two tails. It rarely uses its arms now.",
	},

	thirdParty: {
		cardmarket: 291651,
		tcgplayer: 121217
	}
}

export default card
