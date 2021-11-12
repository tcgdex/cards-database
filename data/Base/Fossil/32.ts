import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		91,
	],

	hp: 50,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Shellder",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],

			name: {
				en: "Clamp",
				fr: "Claquoir"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, cette attaque n'a aucun effet (pas même les dégâts)."
			},

			damage: 30
		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Spike Cannon",
				fr: "Picanon"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Lorsqu'il est attraqué, il projette ses cornes en rapides volées. Personne n'a jamais vu ses entrailles."
	}
}

export default card
