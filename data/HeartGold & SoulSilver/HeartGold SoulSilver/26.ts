import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Meganium",
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
		fr: "Macronium",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Powder",
				fr: "Poudre dodo",
				de: "Schlafpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
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
				fr: "Pousse géante",
				de: "Riesenblüte"
			},
			effect: {
				en: "Remove 2 damage counters from Meganium.",
				fr: "Retirez 2 marqueurs de dégâts de Meganium.",
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

	retreat: 2,

	description: {
		en: "Meganium’s breath has the power to revive dead grass and plants. It can make them healthy again."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278998,
		tcgplayer: 87293
	}
}

export default card
