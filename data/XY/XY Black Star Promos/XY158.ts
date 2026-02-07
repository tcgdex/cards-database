import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Beedrill-EX",
		fr: "M-Dardargnan-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		15,
	],
	hp: 200,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Beedrill-EX",
		fr: "Dardargnan-EX"
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Hazard Stinger",
				fr: "Dard Dangereux"
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed and Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
