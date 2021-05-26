import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Toxtricity VMAX",
		fr: "Salarsen VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 320,

	evolveFrom: {
		en: "Toxtricity V",
		fr: "Salarsen-V"
	},

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "G-Max Riot",
				fr: "Émeute G-Max"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Poisoned, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 80 dégâts supplémentaires."
			},
			damage: "160+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	types: ["Lightning"]
}

export default card
