import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Kabuto",
		de: "Kabuto"
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		140,
	],
	hp: 50,
	types: [
		"Fighting",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Shell",
				de: "Dicke Schale"
			},
			effect: {
				en: "All damage done by attacks to Kabuto from Evolved Pokémon is reduced by 10 (after applying Weakness and Resistance).",
				de: "Jeder Schaden, der Kabuto durch Angriffe von entwickelten Pokémon zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Scratch",
				de: "Kratzer"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	}
}

export default card
