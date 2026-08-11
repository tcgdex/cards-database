import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [284],
	set: Set,

	name: {
		'fr-fr': "Maskadra",
		'en-us': "Masquerain",
		'es-es': "Masquerain",
		'it-it': "Masquerain",
		'pt-br': "Masquerain",
		'de-de': "Maskeregen"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Arakdo",
		'en-us': "Surskit",
		'es-es': "Surskit",
		'it-it': "Surskit",
		'pt-br': "Surskit",
		'de-de': "Gehweiher"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Motif Affolant",
			'en-us': "Panic-Prompting Pattern",
			'es-es': "Patrón del Pánico",
			'it-it': "Motivo Terrificante",
			'pt-br': "Padrão de Pânico",
			'de-de': "Panikmuster"
		},

		effect: {
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez au hasard une carte de la main de votre adversaire.",
			'en-us': "Flip a coin until you get tails. For each heads, discard a random card from your opponent's hand.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Jogue uma moeda até sair coroa. Para cada cara, descarte uma carta aleatória da mão do seu oponente.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Bourdon",
			'en-us': "Bug Buzz",
			'es-es': "Zumbido",
			'it-it': "Ronzio",
			'pt-br': "Zumbido de Inseto",
			'de-de': "Käfergebrumm"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It flaps its four wings to hover and fly freely in any direction—to and fro and sideways.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725087,
				tcgplayer: 509660,
				cardtrader: 255567
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725087,
				tcgplayer: 509660,
				cardtrader: 255567
			}
		},
	],

	illustrator: "Haru Akasaka",

	
}

export default card
