import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		de: "Smogmog"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Koffing",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],

			name: {
				en: "Smog",
				fr: "Purédpois",
				de: "Smog"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon hetzt vergiftet."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Selfdestruct",
				fr: "Destruction",
				de: "Finale"
			},
			effect: {
				en: "Does 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Weezing does 60 damage to itself.",
				fr: "Inflige 10 dégâts à chacun des Pokémon du Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Smogogo s'inflige 60 dégâts.",
				de: "Fügt jedem Pokémon auf der Bank eines jeden Spielers 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.) Smogmog fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Deux Smogo peuvent se combiner en un Smogogo en combinant leurs gaz."
	},

	thirdParty: {
		cardmarket: 273906,
		tcgplayer: 44447
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
