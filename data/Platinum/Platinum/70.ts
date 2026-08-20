import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		de: "Panflam"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [390],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
				fr: "Poing de feu",
				de: "Feuerschlag"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.",
		de: "Dieses flinke PKMN löscht vor dem Schlafengehen die Flamme auf seinem Schweif, um Feuer zu verhindern."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84288,
				cardmarket: 278491
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278491,
				tcgplayer: 84288
			}
		}
	],

}

export default card
