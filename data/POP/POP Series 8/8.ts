import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Luxio",
		de: "Luxio"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		404,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Shinx",
		de: "Sheinux"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fasten Claws",
				de: "Klauen anlegen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunder Fang",
				de: "Donnerzahn"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		en: "Its claws loose electricity with enough amperage to cause fainting. They live in small groups.",
		de: "Seine Krallen geben Elektrizität ab, die stark genug ist, jemanden bewusstlos zu machen."
	},

	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278409,
				tcgplayer: 86941
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278409,
				tcgplayer: 86941
			}
		},
	],
}

export default card
