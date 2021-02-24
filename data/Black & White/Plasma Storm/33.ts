import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rough Skin",
				fr: "Peau Dure",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hard Bite",
				fr: "Morsure Profonde",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 40,

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
