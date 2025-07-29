import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
		de: "Safcon"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		11,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Caterpie",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Harden",
				fr: "Armure",
				de: "Härtner"
			},
			effect: {
				en: "During your opponent's next turn, whenever 20 or less damage is done to Metapod (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
				fr: "Pendant le prochain tour de votre adversaire, à chaque fois que 20 dégâts ou moins sont infligés à Chrysacier (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tout autre effet ou attaque est toujours valide.)",
				de: "Immer wenn Safcon während des nächsten Zuges deines Gegners 20 oder weniger Schadenspunkte zugefügt werden (nachdem Schäwche und Resistenz verrechnet wurden), verhindere diesen Schaden. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Hatch",
				fr: "Éclosion",
				de: "Schlüpfen"
			},
			effect: {
				en: "Flip a coin. If heads, remove all damage counters from Metapod. Then, search your deck for a card that evolves from Metapod and attach that card to Metapod. This counts as evolving Metapod. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, retirez tous les marqueurs de dégâts sur Chrysacier. Puis, cherchez dans votre deck une carte Évolution de Chrysacier et attachez-la à Chrysacier. Cela revient à le faire évoluer. Mélangez ensuite votre deck.",
				de: "Wirf eine Münze. Entferne bei \"Kopf\" alle Schadensmarken von Safcon. Durchsuche dann dein Deck nach einer Karte, die aus Safcon entsteht, und lege sie auf Safcon. Dies zählt als Entwicklung von Safcon. Mische danach dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Son corps est tendre et mou dans sa carapace. Il reste immobile dans son cocon."
	},

	thirdParty: {
		cardmarket: 274553
	}
}

export default card
