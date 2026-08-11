import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		529,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dig Claws",
				fr: "Creusogriffes",
				es: "Hundir Garras",
				it: "Scavazanne",
				pt: "Fincar Garras",
				de: "Schaufelkrallen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It makes its way swiftly through the soil by putting both claws together and rotating at high speed.",
	},

	thirdParty: {
		cardmarket: 388392,
		tcgplayer: 195073
	}
}

export default card
