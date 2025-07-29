import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
		de: "Farbeagle"
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
				en: "Sketch",
				fr: "Gribouille",
				de: "Sketch"
			},
			effect: {
				en: "If the Defending Pokémon attacked last turn, and Smeargle was in play during that attack, Smeargle copies that attack except for its Energy costs and anything else required in order to use that attack.",
				fr: "Si le Pokémon Défenseur a attaqué au tour précédent et si Queulorior était en jeu pendant cette attaque, Queulorior peut copier cette attaque excepté son coût en Énergie et les autres éléments nécessaires à cette attaque.",
				de: "If the Defending Pokémon attack last turn, and Smeargle was in play during that attack, Smeargle copies that attack execpt fpr its Energy costs and anything else reguired in order to use that attack."
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

	description: {
		fr: "Un liquide spécial recouvre l'extrémité de sa queue. Il l'utilise comme peinture pour marquer son territoire."
	},

	thirdParty: {
		cardmarket: 274522
	}
}

export default card
