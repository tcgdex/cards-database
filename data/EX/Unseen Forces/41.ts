import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		de: "Magcargo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
				fr: "Double armure",
				de: "Dual Armor"
			},
			effect: {
				en: "As long as Magcargo has any Fighting Energy attached to it, Magcargo is both Fire and Fighting type.",
				fr: "Tant que Volcaropod possède des Énergies , il est de type  et .",
				de: "As long as Magcargo has any  Energy attached to it, Magcargo is both  and  type."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard",
				de: "Smokescreen"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, votre adversaire lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Flame",
				fr: "Flamme supplémentaire",
				de: "Extra Flame"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 40 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				de: "If the Defending Pokémon is Pokémon-ex, this attack does 40 damage plus 30 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276687,
		tcgplayer: 87015
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
