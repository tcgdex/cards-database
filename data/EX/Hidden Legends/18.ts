import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Gorebyss",
		fr: "Rosabyss"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		368,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clamperl",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stun Needle",
				fr: "Para-dard"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Mystic Water",
				fr: "Eau mystique"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Psychic Energy in play.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  en jeu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
