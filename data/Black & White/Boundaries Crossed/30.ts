import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
		es: "Wartortle",
		it: "Wartortle",
		pt: "Wartortle",
		de: "Schillok"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Withdraw",
				fr: "Repli",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280617
	}
}

export default card
