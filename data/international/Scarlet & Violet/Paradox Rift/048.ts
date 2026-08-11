import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [767],
	set: Set,

	name: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sneaky Snacking",
			'fr-fr': "Pique-Assiette",
			'es-es': "Bocadito Furtivo",
			'it-it': "Merenda Furtiva",
			'pt-br': "Lanchar de Fininho",
			'de-de': "Heimtückischer Happen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard a random card from your opponent's hand.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma carta aleatória da mão do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Wimpod gather in swarms, constantly on the lookout for danger. They scatter the moment they detect an enemy's presence.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740530,
				tcgplayer: 523657,
				cardtrader: 265120
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740530,
				tcgplayer: 523657,
				cardtrader: 265120
			}
		},
	],

	illustrator: "sowsow",

	
}

export default card
