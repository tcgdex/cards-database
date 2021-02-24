import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Magearna",
		fr: "Magearna",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		801,
	],
	hp: 90,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Change Clothes",
				fr: "Changement de Tenue",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à l’un de vos Pokémon dans votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Attack",
				fr: "Attaque Qui Roule",
			},

			damage: 60,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
