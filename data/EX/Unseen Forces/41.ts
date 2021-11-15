import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod"
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
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dual Armor",
				fr: "Double armure"
			},
			effect: {
				en: "As long as Magcargo has any Fighting Energy attached to it, Magcargo is both Fire and Fighting type.",
				fr: "Tant que Volcaropod possède des Énergies , il est de type  et ."
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
				fr: "Brouillard"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, votre adversaire lance une pièce. Si c'est pile, cette attaque est sans effet."
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
				fr: "Flamme supplémentaire"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 40 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires."
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





}

export default card
