import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Sprouting",
				fr: "Grandir"
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to Celebi. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Grass et attachez-la à Celebi. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Leaf Tornado",
				fr: "Tornade de feuilles"
			},
			effect: {
				en: "You may move any number of basic Grass Energy cards attached to your Pokémon to your other Pokémon in any way you like.",
				fr: "Vous pouvez déplacer autant de cartes Énergie de base Grass attachées à vos Pokémon que vous voulez sur vos autres Pokémon de la façon que vous voulez."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	description: {
		fr: "Il a le pouvoir de voyager dans le temps. Cependant, on dit qu'il n'apparaît qu'en temps de paix."
	}
}

export default card
