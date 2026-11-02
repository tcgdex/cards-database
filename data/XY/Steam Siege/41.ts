import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Joltik",
		fr: "Statitik",
		es: "Joltik",
		it: "Joltik",
		pt: "Joltik",
		de: "Wattzapf"
	},

	illustrator: "Ayaka Yoshida",
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
				"Lightning",
			],
			name: {
				en: "Attach",
				fr: "Accrochage",
				es: "Pegarse",
				it: "Appiccicoso",
				pt: "Conectar",
				de: "Festkleben"
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

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "They attach themselves to large-bodied Pokémon and absorb static electricity, which they store in an electric pouch.",
		de: "Es pflanzt sich an großen Pokémon fest und zapft ihnen elektrische Energie ab. Diese hortet es in seinen Ladetaschen."
	},

	thirdParty: {
		cardmarket: 291534,
		tcgplayer: 121130
	}
}

export default card
