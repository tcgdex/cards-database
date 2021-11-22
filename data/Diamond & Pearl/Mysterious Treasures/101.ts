import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Snover",
		fr: "Blizzi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		459,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Curiosity",
				fr: "Curiosité"
			},
			effect: {
				en: "Look at your opponent's hand.",
				fr: "Regardez la main de votre adversaire."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Snowball Fight",
				fr: "Bataille de boules de neige"
			},
			effect: {
				en: "Flip a coin. If tails, Snover does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Blizzi s'inflige 10 dégâts."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	description: {
		fr: "Il vit sur les monts enneigés. Ignorant des coutumes humaines, il lui arrive d'être très indiscret."
	}
}

export default card
