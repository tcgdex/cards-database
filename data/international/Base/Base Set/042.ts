import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe",
		'de-de': "Schillok",
		'it-it': "Wartortle"
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
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'it-it': "Squirtle"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Withdraw",
				'fr-fr': "Repli",
				'de-de': "Panzerschutz",
				'it-it': "Ritirata"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Wartortle during your opponent's next turn. (Any other effects of attacks still happen.)",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carabaffe pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				'de-de': "Wirf eine Münze. Bei 'Kopf' verhindere allen Schaden, der Schillok während des nächsten Zugs Deines Gegners zugefühgt wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)",
				'it-it': "Lancia una moneta. Se esce testa, preveni tutti i danni inflitti a Wartortle durante il prossimo turno del tuo avversario. (Tutti gli effetti degli attacchi restano validi.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss",
				'it-it': "Morso"
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
	retreat: 1,


	description: {
		'en-us': "Often hides in water to stalk unweary prey. When swimming quickly, it moves its ears to maintain balance.",
		'fr-fr': "Il se cache au fond de l'eau pour guetter sa proie. Ses oreilles sont des gouvernails.",
		'it-it': "Spesso di nasconde nell'acqua per sorprendere le prede. Quando nuota rapidamente, muove le orecchie per mantenersi in equilibrio. LIV 22 N.8"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273737,
				tcgplayer: 42385
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107039
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107039
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
