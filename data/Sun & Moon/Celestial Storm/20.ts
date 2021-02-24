import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Cacturne",
		fr: "Cacturne",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poison Payback",
				fr: "Retour de Poison",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness, Resistance, or any other effects on that Pokémon.",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur ce Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
