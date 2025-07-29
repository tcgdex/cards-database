import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		pt: "Abomasnow",
		de: "Rexblisar"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		460,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
			},

			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bang Heads",
				fr: "Choc Frontal",
			},
			effect: {
				en: "Both this Pokémon and the Defending Pokémon are now Confused.",
				fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Confus.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281047
	}
}

export default card
