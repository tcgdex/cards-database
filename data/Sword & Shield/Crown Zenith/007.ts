import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [191],
	set: Set,

	name: {
		en: "Sunkern",
		fr: "Tournegrin",
		es: "Sunkern",
		it: "Sunkern",
		pt: "Sunkern",
		de: "Sonnkern"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			es: "Bomba Germen",
			it: "Semebomba",
			pt: "Bomba de Sementes",
			de: "Samenbomben"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "It lives by drinking only dewdrops from under the leaves of plants. It is said that it eats nothing else.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691724,
				tcgplayer: 478053
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691724,
				tcgplayer: 478053
			}
		},
	],
}

export default card
