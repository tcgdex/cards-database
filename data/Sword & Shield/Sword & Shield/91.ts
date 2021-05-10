import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Indeedee V",
		fr: "Wimessir V",
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 180,

	types: [
		"Psychic",
	],

	suffix: "V",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Watch Over",
				fr: "Veille",
			},
			effect: {
				en: "Once during your turn, you may heal 20 damage from your Active Pokémon.",
				fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de votre Pokémon Actif.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
			},
			effect: {
				en: "This attack does 60 more damage for each Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: "10+",

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
			type: "Fightning",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
