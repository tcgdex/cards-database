import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Cleffa",
		fr: "Mélo",
		de: "Pii"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		173,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Eek",
				fr: "Hi !",
				de: "Pieps"
			},
			effect: {
				en: "Draw 2 cards",
				fr: "Piochez 2 cartes.",
				de: "Ziehe 2 Karten."
			},

		},
	],

	description: {
		en: "Because of its unusual, star-like silhouette, people believe that it came here on a meteor.",
		fr: "À cause de son étrange forme en étoile, les gens pensent qu'il est arrivé ici sur un météore.",
		de: "Wegen seiner ungewöhnlichen sternenartigen Silhouette denken viele, dass es auf einer Sternschnuppe hergekommen ist."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84363
			},
		}
	]
}

export default card
