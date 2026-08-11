import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Raikou",
		'de-de': "Raikou"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [243],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Pure Body",
				'de-de': "Reiner Körper"
			},
			effect: {
				'en-us': "To attach a Lightning Energy card from your hand to Raikou, you must discard an Energy card attached to Raikou. (Attach the Lightning Energy, and then discard an Energy card from Raikou.)",
				'de-de': "Um eine -Energiekarte aus deiner Hand an Raikou anzulegen, musst du eine an Raikou angelegte Energiekarte auf deinen Ablagestapel legen. (Lege erst die -Energiekarten an, dann eine an Raikou angelegte Energiekarte auf den Ablagestapel.)"
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
				'en-us': "Lightning Sphere",
				'de-de': "Blitz-Spähre"
			},
			effect: {
				'en-us': "You may flip a coin. If heads, discard all Lightning Energy cards attached to Raikou. This attack does 40 damage plus 20 more damage for each Energy card discarded in this way.",
				'de-de': "Du kannst eine Münze werfen. Lege bei 'Kopf' alle an Raikou angelegten -Energiekarten auf deinen Ablagestapel. Dieser Angriff fügt 40 Schadenspunkte plus 20 weitere Schadenspunkte für jede auf diese Weise abgelegte Energiekarten zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 88531,
				cardmarket: 275286
			},
		},
	],
}

export default card
