import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Gas",
				fr: "Gaz toxik"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sticky Hands",
				fr: "Mains collantes"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé ; si c'est pile, cette attaque inflige 10 dégâts."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "On a récemment découvert que les Tadmorv prennent forme dans les usines de traitement des déchets, et peuvent se déplacer vers les villes à travers les égouts.."
	}
}

export default card
