import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Vikavolt",
		fr: "Lucanon",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		738,
	],
	hp: 150,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stealthy Body",
				fr: "Corps Furtif",
			},
			effect: {
				en: "If there is any Stadium card in play, this Pokémon has no Weakness.",
				fr: "S’il y a une carte Stade en jeu, ce Pokémon n’a pas de Faiblesse.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electricannon",
				fr: "Canon Électrique",
			},
			effect: {
				en: "You may discard all Lightning Energy from this Pokémon. If you do, this attack does 100 more damage.",
				fr: "Vous pouvez défausser toute l’Énergie Lightning attachée à ce Pokémon. Dans ce cas, cette attaque inflige 100 dégâts supplémentaires.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
