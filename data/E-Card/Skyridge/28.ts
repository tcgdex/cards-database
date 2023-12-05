import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Raikou",
		de: "Raikou"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		243,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pure Body",
				de: "Reiner Körper"
			},
			effect: {
				en: "To attach a Lightning Energy card from your hand to Raikou, you must discard an Energy card attached to Raikou. (Attach the Lightning energy, and then discard an Energy card from Raikou.)",
				de: "Um eine-Energiekarte aus deiner Hand an Raikou anzulegen, musst du eine an Raikou angelegte Energiekarte auf deinen Ablagestapel legen. (Lege erst die -Energiekarte an, und lege dann eine an Raikou angelegte Energiekarte auf den Ablagestapel.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Sphere",
				de: "Blitz-Spähre"
			},
			effect: {
				en: "You may flip a coin. If heads, discard all Energy cards attached to Raikou. This attack does 40 damage plus 20 more damage for each Energy card discarded in this way.",
				de: "Du kannst eine Münze werfen. Lege bei 'Kopf' alle an Raikou angelegten -Energiekarten auf deinen Ablagestapel. Dieser Angriff fügt 40 Schadenspunkte plus 20 weitere Schadenspunkte für jede auf diese Weise abgelegte Energiekarten zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
