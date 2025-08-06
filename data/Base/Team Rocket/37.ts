import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Golduck",
		fr: "Akwakwak obscur",
		de: "Dunkles Entoron"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Psyduck",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Third Eye",
				fr: "Troisième œil",
				de: "Drittes Auge"
			},
			effect: {
				en: "Discard 1 Energy card attached to Dark Golduck in order to draw up to 3 cards.",
				fr: "Défaussez 1 carte Énergie attachée à Akwakwak obscur pour pouvoir piocher jusqu'à 3 cartes.",
				de: "Entferne eine auf Dunkles Entoron abgelegte Energiekarte, um bis zu drei Karten zu ziehen."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy",
				fr: "Super Psy",
				de: "Super-Psychoschlag"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Quand les Psykokwak évoluent, leurs maux de tête disparaissent et ils se retrouvent en possession d'un formidable pouvoir mental."
	},

	thirdParty: {
		cardmarket: 274090,
		tcgplayer: 84604
	}
}

export default card
