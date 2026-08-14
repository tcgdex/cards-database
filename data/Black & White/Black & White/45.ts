import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Joltik",
		fr: "Statitik",
		es: "Joltik",
		it: "Joltik",
		pt: "Joltik",
		de: "Wattzapf"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		595,
	],

	hp: 30,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
				de: "Blutsauger"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Verteidigenden Pokémon zugefügt hast."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "They attach themselves to large-bodied Pokémon and absorb static electricity, which they store in an electric pouch.",
		de: "Es pflanzt sich an großen Pokémon fest und zapft ihnen elektrische Energie ab. Diese hortet es in seinen Ladetaschen."
	},

	thirdParty: {
		cardmarket: 279782,
		tcgplayer: 86354
	}
}

export default card
