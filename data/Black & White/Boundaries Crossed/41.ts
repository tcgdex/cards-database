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
		de: "Zwottronin"
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
				de: "Kaskade"
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
				de: "Schrecklicher Strudel"
			},
			effect: {
				en: "Discard an Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Lege 1 an das Verteidigenden Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
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

	description: {
		en: "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody.",
		de: "Besiegt Gegner durch einen einzigen Hieb mit der Klinge an seinem Panzer. Ein böser Blick und seine Feinde verstummen."
	},

	thirdParty: {
		cardmarket: 280628,
		tcgplayer: 88910
	}
}

export default card
