import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Umbreon",
		de: "Nachtara"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Moonlight Fang",
				de: "Mondscheinfänge"
			},
			effect: {
				en: "During your opponent's next turn, prevent all effects, including damage, done to Umbreon by attacks from your opponent's Pokémon that has any Poké-Powers or Poké-Bodies.",
				de: "Verhindere während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Nachtara von gegnerischen Pokémon, die mindestens 1 Poké-Power oder Poké-Body haben, zugefügt würden."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Quick Blow",
				de: "Schnellschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 279665
	}
}

export default card
