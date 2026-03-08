import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Bronzong",
		de: "Bronzong"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],
	
	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Bronzor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Oracle Arrow",
				de: "Orakelpfeil"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Wähle 1 Pokémon deines Gegners, auf den bereits mindestens 1 Schadensmarke liegt. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Antigravity",
				de: "Anti-Schwerkraft"
			},
			effect: {
				en: "The Retreat Cost for Bronzong is 0 until the end of your next turn.",
				de: "Bronzong hat Rückzugskosten 0 bis zum Ende deines nächsten Zuges."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278886,
		tcgplayer: 83995
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
