import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		pt: "Azumarill",
		de: "Azumarill"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Deep Dive",
				fr: "Plongée Profonde",
			},
			effect: {
				en: "Flip 2 coins. For each heads, heal 40 damage from this Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque côté face, soignez 40 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
				fr: "Aquasonique",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280624,
		tcgplayer: 83686
	}
}

export default card
