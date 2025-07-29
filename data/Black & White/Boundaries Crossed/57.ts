import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		es: "Zebstrika",
		it: "Zebstrika",
		pt: "Zebstrika",
		de: "Zebritz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		523,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flame Charge",
				fr: "Nitrocharge",
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280644
	}
}

export default card
