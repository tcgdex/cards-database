import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Throh",
		fr: "Judokrak",
		es: "Throh",
		it: "Throh",
		pt: "Throh",
		de: "Jiutesto"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		538,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Squeeze",
				fr: "Compression",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Superpower",
				fr: "Surpuissance",
			},
			effect: {
				en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280507
	}
}

export default card
