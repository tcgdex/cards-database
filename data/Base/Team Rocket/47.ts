import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flop",
				fr: "Flop"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Rapid Evolution",
				fr: "Évolution rapide"
			},
			effect: {
				en: "Search your deck for an Evolution card named Gyarados or Dark Gyarados and put it on Magikarp. (This counts as evolving Magikarp.) Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Léviator ou Léviator obscur et placez-la sur Magicarpe. (Cela revient à faire évoluer Magicarpe). Mélangez ensuite votre deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "De récentes recherches ont démontré la présence d'ADN de dragon dans cette race de Pokémon."
	}
}

export default card
