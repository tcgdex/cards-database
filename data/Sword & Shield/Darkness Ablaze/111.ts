import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Hoopa",
		fr: "Hoopa"
	},
	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Darkness",
	],




	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Assault Gate",
				fr: "Portail d’Assaut"
			},
			effect: {
				en: "If this Pokémon didn’t move from the Bench to the Active Spot this turn, this attack does nothing. This attack’s damage isn’t affected by Weakness.",
				fr: "Si ce Pokémon n’a pas été déplacé du Banc vers le Poste Actif pendant ce tour, cette attaque ne fait rien. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
