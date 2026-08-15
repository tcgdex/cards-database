import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
		de: "Safcon"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [11],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
		de: "Raupy"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Green Shield",
				fr: "Bouclier vert",
				de: "Grüner Schild"
			},
			effect: {
				en: "Each of your Grass Pokémon has no Weakness.",
				fr: "Vos Pokémon Grass ne subissent plus la Faiblesse.",
				de: "Jedes deiner {G}-Pokémon hat keine Schwäche mehr."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharpen",
				fr: "Affûtage",
				de: "Schärfer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It prepares for evolution by hardening its shell as much as possible to protect its soft body.",
		de: "Steht seine Entwicklung bevor, härtet es seine Schale, um seinen empfindlichen Körper zu schützen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87391,
				cardmarket: 279018
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87391,
				cardmarket: 279018
			}
		},
	],

}

export default card
