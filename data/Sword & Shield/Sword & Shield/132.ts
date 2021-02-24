import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Galarian Stunfisk",
		fr: "Limonde de Galar",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Snap Trap",
				fr: "Troquenard",
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), discard an Energy from the Attacking Pokémon.",
				fr: "Si ce Pokémon est sur le Poste Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même s’il est mis K.O.), défaussez une Énergie du Pokémon Attaquant.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Damage Rush",
				fr: "Charge Destructrice",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
