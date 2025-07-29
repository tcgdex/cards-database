import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Leafeon",
		de: "Folipurba"
	},

	illustrator: "match",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		470,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miasma Wind",
				de: "Miasma"
			},
			effect: {
				en: "Does 50 damage times the number of Special Conditions affecting the Defending Pokémon.",
				de: "Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl der Speziellen Zustände, von dem das Verteidigende Pokémon betroffen ist, zu."
			},
			damage: "50x",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Soothing Scent",
				de: "Beruhigender Duft"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

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

	thirdParty: {
		cardmarket: 279656
	}
}

export default card
