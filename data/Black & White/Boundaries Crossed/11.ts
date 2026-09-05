import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Snivy",
		fr: "Vipélierre",
		es: "Snivy",
		it: "Snivy",
		pt: "Snivy",
		de: "Serpifeu"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		495,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
				de: "Rankenhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
				de: "Zerschneider"
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

	retreat: 1,

	description: {
		en: "It is very intelligent and calm. Being exposed to lots of sunlight makes its movements swifter.",
		de: "Eine kühle Denkernatur. Bekommt es genügend Sonnenlicht ab, erhöht sich die Geschwindigkeit seiner Bewegungen."
	},

	thirdParty: {
		cardmarket: 280598,
		tcgplayer: 89380
	}
}

export default card
