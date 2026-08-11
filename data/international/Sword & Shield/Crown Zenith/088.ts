import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [305],
	set: Set,

	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'es-es': "Lairon",
		'it-it': "Lairon",
		'pt-br': "Lairon",
		'de-de': "Stollrak"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'es-es': "Aron",
		'it-it': "Aron",
		'pt-br': "Aron",
		'de-de': "Stollunior"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Confront",
			'fr-fr': "Confrontation",
			'es-es': "Confrontar",
			'it-it': "Confronto",
			'pt-br': "Confrontar",
			'de-de': "Konfrontieren"
		},

		damage: 40
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Wreak Havoc",
			'fr-fr': "Ravages",
			'es-es': "Sembrar el Caos",
			'it-it': "Scombussolare",
			'pt-br': "Causar Estragos",
			'de-de': "Chaos anrichten"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Jogue 1 moeda até sair coroa. Para cada cara, descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Lege pro Kopf die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Lairon live in mountains brimming with spring water and iron ore, so these Pokémon often came into conflict with humans in the past.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691806,
				tcgplayer: 478225
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691806,
				tcgplayer: 478225
			}
		},
	],
}

export default card
