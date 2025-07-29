import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Meganium",
		de: "Meganie"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		154,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bayleef",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Powder",
				de: "Schlafpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Bloom",
				de: "Riesenblüte"
			},
			effect: {
				en: "Remove 2 damage counters from Meganium.",
				de: "Entferne 2 Schadensmarken von Meganie."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 279670
	}
}

export default card
