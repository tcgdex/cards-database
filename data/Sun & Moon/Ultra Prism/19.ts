import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Incandescent Body",
				fr: "Corps Incandescent",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Blaster",
				fr: "Explosif Enflammé",
			},
			effect: {
				en: "You may discard 2 Energy from this Pokémon. If you do, this attack does 80 more damage.",
				fr: "Vous pouvez défausser 2 Énergies attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
