import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo"
	},

	illustrator: "Kazuma Koda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Colorless",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Final Dig",
				fr: "Dernier Coup"
			},
			effect: {
				en: "If this Pokémon is Knocked Out by damage from an attack from your opponent’s Pokémon, discard the top 2 cards of your opponent’s deck.",
				fr: "Si ce Pokémon est mis K.O. par les dégâts d’une attaques d’un Pokémon de votre adversaire, défaussez les 2 cartes du dessus du deck de votre adversaire."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
