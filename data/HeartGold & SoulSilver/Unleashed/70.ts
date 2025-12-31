import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Zubat",
		fr: "Nosferapti",
		de: "Zubat"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		41,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Glide",
				fr: "Glissade",
				de: "Gleiten"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Double Attack",
				fr: "Double attaque",
				de: "Doppelter Angriff"
			},
			effect: {
				en: "Choose 2 of your opponent’s Benched Pokémon. This attack does 10 damage to each of them. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon se trouvant sur le Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun de ces Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Wähle 2 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt jedem der gewählten Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Capable of flying safely in dark places, it emits ultrasonic cries to check for any obstacles."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
	],

	thirdParty: {
		cardmarket: 279226,
		tcgplayer: 90776
	}
}

export default card
