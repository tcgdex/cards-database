import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
		de: "Schillok"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Squirtle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Withdraw",
				fr: "Repli",
				de: "Panzerschutz"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Wartortle during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carabaffe pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				de: "Wirf eine Münze. Bei 'Kopf' verhindere allen Schaden, der Schillok während des nächsten Zugs Deines Gegners zugefühgt wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il se cache au fond de l'eau pour guetter sa proie. Ses oreilles sont des gouvernails."
	},

	thirdParty: {
		cardmarket: 273737,
		tcgplayer: 42385
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
}

export default card
