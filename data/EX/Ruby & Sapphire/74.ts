import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Torchic",
		fr: "Poussifeu",
		de: "Flemmli"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [255],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Singe",
				fr: "Roussir",
				de: "Versengung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verbrannt."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 547271,
		tcgplayer: 89950
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89950
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89950
			}
		},
		{
			type: "normal",
			size: "jumbo",
			stamp: ["25th-celebration"],
			thirdParty: {
				tcgplayer: 00000
			}
		},
		{
			type: "normal",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 00000
			}
		}
	]
}

export default card
