import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Bounsweet",
		fr: "Croquine",
		es: "Bounsweet",
		it: "Bounsweet",
		pt: "Bounsweet",
		de: "Frubberl"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		761,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Splash",
				fr: "Trempette",
				es: "Salpicadura",
				it: "Splash",
				pt: "Borrifada",
				de: "Platscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque Tournante",
				es: "Ataque Giratorio",
				it: "Attacco Rotante",
				pt: "Ataque Giratório",
				de: "Rundumangriff"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 387917,
		tcgplayer: 194933
	}
}

export default card
