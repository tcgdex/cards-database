import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Venomoth",
		fr: "Aéromite"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Protective Dust",
				fr: "Poussière Protectrice"
			},
			effect: {
				en: "Prevent all effects of attacks, except damage, done to Venomoth by the Attacking Pokémon.",
				fr: "Prévenez tous les effets d'une attaque, dégâts exclus, infligés à Aéromite par le Pokémon Attaquant."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Poison",
				fr: "Poison dodo"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wind",
				fr: "Coupe-vent"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet."
			},
			damage: 60,

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
