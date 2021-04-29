import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
	},
	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		487,
	],
	hp: 130,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Distortion Door",
				fr: "Porte Distorsion",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put it onto your Bench. If you do, put 1 damage counter on 2 of your opponent's Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre pile de défausse, vous pouvez le placer sur votre Banc. Dans ce cas, placez un marqueur de dégâts sur 2 des Pokémon de Banc de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Shadow Impact",
				fr: "Impact Lugubre",
			},
			effect: {
				en: "Put 4 damage counters on 1 of your Pokémon.",
				fr: "Placez 4 marqueurs de dégâts sur l’un de vos Pokémon.",
			},
			damage: 130,

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
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
