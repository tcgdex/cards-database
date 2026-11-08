import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior",
		'de-de': "Farbeagle"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		235,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sketch",
				'fr-fr': "Gribouille",
				'de-de': "Sketch"
			},
			effect: {
				'en-us': "If the Defending Pokémon attacked last turn, and Smeargle was in play during that attack, Smeargle copies that attack except for its Energy costs and anything else required in order to use that attack.",
				'fr-fr': "Si le Pokémon Défenseur a attaqué au tour précédent et si Queulorior était en jeu pendant cette attaque, Queulorior peut copier cette attaque excepté son coût en Énergie et les autres éléments nécessaires à cette attaque.",
				'de-de': "If the Defending Pokémon attack last turn, and Smeargle was in play during that attack, Smeargle copies that attack execpt fpr its Energy costs and anything else reguired in order to use that attack."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A special fluid oozes from the tip of its tail. It paints the fluid everywhere to mark its territory.",
		'fr-fr': "Un liquide spécial recouvre l'extrémité de sa queue. Il l'utilise comme peinture pour marquer son territoire."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274522,
				tcgplayer: 89350
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274522,
				tcgplayer: 89350
			}
		}
	]
}

export default card
