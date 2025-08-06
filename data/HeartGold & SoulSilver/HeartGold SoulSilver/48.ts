import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		de: "Parasek"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Drain",
				fr: "Aspirododo",
				de: "Schlafentzug"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Remove 4 damage counters from Parasect.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Retirez 4 marqueurs de dégâts de Parasect.",
				de: "Das Verteidigende Pokémon schläft jetzt. Entferne 4 Schadensmarken von Parasek."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
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

	retreat: 2,

	description: {
		en: "The larger the mushroom on its back grows, the stronger the mushroom spores it scatters."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279020,
		tcgplayer: 87960
	}
}

export default card
