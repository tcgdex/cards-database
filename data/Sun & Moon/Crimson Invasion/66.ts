import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Lairon",
		fr: "Galegon",
		es: "Lairon",
		it: "Lairon",
		pt: "Lairon",
		de: "Stollrak"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		305,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe Acier",
				es: "Garra Metal",
				it: "Ferrartigli",
				pt: "Garra de Metal",
				de: "Metallklaue"
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 311914
	}
}

export default card
