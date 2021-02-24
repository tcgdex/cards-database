import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Dragalge",
		fr: "Kravarech",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		691,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poison Point",
				fr: "Point Poison",
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
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Twister",
				fr: "Ouragan",
			},
			effect: {
				en: "Flip 2 coins. For each heads, discard an Energy from your opponent's Active Pokémon. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
