import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix",
		de: "Onix"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
				de: "Steinwurf"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Harden",
				fr: "Armure",
				de: "Härtner"
			},
			effect: {
				en: "During opponent's next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
				fr: "Pendant le prochain tour de votre adversaire, à chaque fois que 30 dégâts ou moins sont infligés à Onix (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tout autre effet ou attaque est toujours valide.)",
				de: "Immer wenn Onix während des nächsten gegnerischen Zugs 30 oder weniger Schadenspunkte zugefügt werden, verhindere diesen Schaden (nachdem Schwäche und Resistenz abgerechnet wurden), (Alle anderen Auwirkungen von Angriffen finden immer noch statt)."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Les parties en pierre de son corps durcissent pour devenir comme un diamant de couleur noire."
	},

	thirdParty: {
		cardmarket: 273751,
		tcgplayer: 42400
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/054.ts"
		}
	]
}

export default card
