import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		102,
	],
	hp: 30,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Propagation",
				fr: "Propagation",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon into your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez ajouter ce Pokémon à votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
