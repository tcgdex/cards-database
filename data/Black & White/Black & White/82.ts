import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Herdier",
		fr: "Ponchien",
		es: "Herdier",
		it: "Herdier",
		pt: "Herdier",
		de: "Terribark"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		507,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Lillipup",
		fr: "Ponchiot",
		de: "Yorkleff"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
				de: "Sammeln"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				de: "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It loyally follows its Trainer's orders. For ages, they have helped Trainers raise Pokémon.",
		de: "Folgt treu den Befehlen seines Trainers. Schon seit jeher ist es als rechte Hand der Pokémon-Trainer bekannt."
	},

	thirdParty: {
		cardmarket: 279820,
		tcgplayer: 86069
	}
}

export default card
