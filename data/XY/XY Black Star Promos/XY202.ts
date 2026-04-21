import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 50,

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
				en: "Charge",
				fr: "Chargeur"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie  dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre"
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon."
			},
			damage: 70,

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

	thirdParty: {
		cardmarket: 289809
	}
}

export default card
