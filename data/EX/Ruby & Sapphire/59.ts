import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Mudkip",
		fr: "Gobou",
		de: "Hydropi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [258],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
				fr: "Écume",
				de: "Blubber"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [		{
			type: "normal",
			thirdParty: {
				cardmarket: 275707,
				tcgplayer: 87605
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275707,
				tcgplayer: 87605
			}
		},
		{
			type: "normal",
			size: "jumbo",
			stamp: ["25th-celebration"],
			thirdParty: {
				cardmarket: 547276,
				tcgplayer: 231460
			}
		},
		{
			type: "normal",
			stamp: ["reed-weichler"],
			thirdParty: {
				tcgplayer: 477406
			}
		}
	],

}

export default card
