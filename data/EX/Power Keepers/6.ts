import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Glühen"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bursting Inferno",
				fr: "Enfer explosif",
				de: "Flammendes Inferno"
			},
			effect: {
				en: "Each Defending Pokémon is now Burned.",
				fr: "Chaque Pokémon Défenseur est maintenant Brûlé.",
				de: "Verteidigende Pokémon sind jetzt verbrannt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277312
	}
}

export default card
