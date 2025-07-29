import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Wormadam Sandy Cloak",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Burmy",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sandy Cloak",
			},
			effect: {
				en: "Prevent all effects of attacks, excluding damage, done to Wormadam Sandy Cloak.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Push Over",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Fighting Energy attached to Wormadam Sandy Cloak.",
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	description: {
		en: "When BURMY evolved, it cloak became a part of this Pokémon’s body. The cloak is never shed."
	},

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278042
	}
}

export default card
