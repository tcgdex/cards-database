import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
		de: "Wailord"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 200,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sleeping Pulse",
				fr: "Pouls dormant",
				de: "Ruhepuls"
			},
			effect: {
				en: "As long as Wailord remains Asleep between turns, remove 1 damage counter from Wailord.",
				fr: "Tant que Wailord est Endormi entre deux tours, retirez-lui 1 marqueur de dégât.",
				de: "Wenn Wailord schläft und zwischen zwei Zügen nicht aufwacht, entferne 1 Schadensmarke von Wailord."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Sink Deep",
				fr: "Couler",
				de: "Einnicken"
			},
			effect: {
				en: "If Wailord has any damage counters on it, Wailord is now Asleep.",
				fr: "Si Wailord possède des marqueurs de dégât, il est maintenant Endormi.",
				de: "Wenn auf Wailord mindestens 1 Schadensmarke liegt, schläft Wailord jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 277932
	}
}

export default card
