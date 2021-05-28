import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Mimikyu",
		fr: "Mimiqui"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Heal Jamming",
				fr: "Soins Suspendus"
			},
			effect: {
				en: "Your opponent’s Benched Pokémon can’t be healed.",
				fr: "Les Pokémon de Banc de votre adversaire ne peuvent pas être soignés."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
