import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
		de: "Machollo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Last-Chance Chop",
				fr: "Dernière Chance",
				de: "Letzter Hoffnungshieb"
			},
			effect: {
				en: "If this Pokémon's remaining HP is 10, this attack does 70 more damage.",
				fr: "S'il reste 10 PV à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
				de: "Wenn dieses Pokémon 10 verbliebene KP hat, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Seismic Toss",
				fr: "Frappe Atlas",
				de: "Geowurf"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It happily carries heavy cargo to toughen up. It willingly does hard work for people.",
		de: "Es hievt gern schwere Ladung, um so zu trainieren. Es hilft auch gern anderen bei harter Arbeit."
	},

	thirdParty: {
		cardmarket: 281069,
		tcgplayer: 86985
	}
}

export default card
