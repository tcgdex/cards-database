import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Sandslash",
		fr: "Sablaireau",
		de: "Sandamer"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Sandshrew",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf drei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze 'Kopf' zeigt 20 Schadenspunkte zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Il se roule en boule hérissée de piques s'il est menacé. Il peut ainsi s'enfuir ou attaquer."
	},

	thirdParty: {
		cardmarket: 273902
	}
}

export default card
