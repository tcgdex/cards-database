import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Diggersby",
		'fr-fr': "Excavarenne",
		'es-es': "Diggersby",
		'it-it': "Diggersby",
		'pt-br': "Diggersby",
		'de-de': "Grebbit"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		660,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Ear Dig",
				'fr-fr': "Excav'Oreille",
				'es-es': "Excavar con Orejas",
				'it-it': "Fossorecchio",
				'pt-br': "Orelha Escavadeira",
				'de-de': "Ohrschaufel"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la carta in cima al mazzo del tuo avversario.",
				'pt-br': "Jogue uma moeda até sair coroa. Para cada cara, descarte o card de cima do baralho do seu oponente.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Lege pro \"Kopf\" die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "As powerful as an excavator, its ears can reduce dense bedrock to rubble. When it's finished digging, it lounges lazily.",
	},

	thirdParty: {
		cardmarket: 273621,
		tcgplayer: 95988
	}
}

export default card
