import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Arbok",
		de: "Arbok"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [208],

	hp: 100,

	types: [
		"Metal"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Earth Rift",
				fr: "Jet-venin",
				de: "Poison Spray"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.) Then, flip a coin. If tails, this attack can't be used during your next turn.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			}

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Smash",
				fr: "Allergie poison",
				de: "Poison Reaction"
			},
			effect: {
				en: "Flip 2 coins. If both are heads, this attack does 50 damage plus 20 more damage. If both are tails, this attack does nothing. If 1 is heads and 1 is tails, this attack just does 50 damage.",
				fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 4,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83569,
				cardmarket: 274878
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
