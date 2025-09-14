import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Graveler",
		fr: "Gravalanch",
		de: "Georok"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Geodude",
	},

	stage: "Stage1",

	attacks: [
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
				en: "During your opponent's next turn, whenever 30 or less damage is done to Graveler (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
				fr: "Pendant le prochain tour de votre adversaire, à chaque fois que 30 dégâts ou moins sont infligés à Gravalanch (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tout autre effet ou attaque est toujours valide.)",
				de: "Immer wenn Georok während des nächsten gegnerischen Zuges 30 oder weniger Schadenspunkte zugefühgt werden (nachdem Schwäche und Resistenz abgerechnet wurden), verhindere diesen Schaden. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-pierres",
				de: "Steinwurf"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Pour se déplacer il dégringole le long des pentes. Il pulvérise tout obstacle sur son passage."
	},

	thirdParty: {
		cardmarket: 273898,
		tcgplayer: 44439
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
