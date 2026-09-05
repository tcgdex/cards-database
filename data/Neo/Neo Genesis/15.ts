import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
		de: "Stahlos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
		de: "Onix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Crush",
				fr: "Ecras'queue",
				de: "Zerquetschender Schweif"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage; if tails, this attack does 30 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires ; si c'est pile cette attaque inflige 30 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei „Zahl“ fügt dieser Angriff 30 Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 4,


	description: {
		en: "Its body has been compressed deep under the ground. As a result, it is even harder than a diamond.",
		fr: "Son corps a été compressé à une profondeur incroyable. Il en résulte qu'il est plus dur que le diamant.",
		de: "Sein Körper wurde tief unter der Erde komprimiert. Daher ist es sogar noch härter als ein Diamant."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274415,
				tcgplayer: 89555
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274415,
				tcgplayer: 89555
			}
		}
	]
}

export default card
