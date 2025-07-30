import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Samurott",
		fr: "Clamiral",
		es: "Samurott",
		it: "Samurott",
		pt: "Samurott",
		de: "Admurai"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		503,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Dewott",
		fr: "Mateloutre",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Whirlpool",
				fr: "Siphon Destructeur",
			},
			effect: {
				en: "Discard an Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280628,
		tcgplayer: 88910
	}
}

export default card
