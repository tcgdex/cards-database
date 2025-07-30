import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sticky Liquid",
				fr: "Liquide gluant",
				de: "Klebrige Flüssigkeit"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon’s Retreat Cost is Colorless more.",
				fr: "Pendant le prochain tour de votre adversaire, le Coût de retraite du Pokémon Défenseur est augmenté de Colorless.",
				de: "Die Rückzugskosten für das Verteidigende Pokémon betragen im nächsten Zug deines Gegners  mehr."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Toss",
				fr: "Décision vaseuse",
				de: "Schleimwurf"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Wherever Grimer has passed, so many germs are left behind that no plants will ever grow again."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279303,
		tcgplayer: 85913
	}
}

export default card
