import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Jigglypuff",
		de: "Pummeluff"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
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
				en: "Nap",
				de: "Nickerchen"
			},
			effect: {
				en: "Remove 1 damage counter from Jigglypuff",
				de: "Entferne eine Schadensmarke von Pummeluff."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lullaby",
				de: "Wiegenlied"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				de: "Das verteidigende Pokémon schläft jetzt."
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

	thirdParty: {
		cardmarket: 275326
	}
}

export default card
