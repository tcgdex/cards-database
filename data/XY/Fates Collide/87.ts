import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		572,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Smack",
				fr: "Coup de Queue",
				es: "Bofetón Cola",
				it: "Codasberla",
				pt: "Ataque de Cauda",
				de: "Schweifstreich"
			},

			damage: 20,

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
		cardmarket: 289907
	}
}

export default card
