import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [339],
	set: Set,

	name: {
		'en-us': "Barboach",
		'fr-fr': "Barloche",
		'es-es': "Barboach",
		'it-it': "Barboach",
		'pt-br': "Barboach",
		'de-de': "Schmerbe"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Makes its home in swamps with murky water. The poor visibility hides this Pokémon from predators, and the slime on its body makes grasping it difficult.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658543,
				tcgplayer: 272235
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658543,
				tcgplayer: 272235
			}
		},
	],
}

export default card
