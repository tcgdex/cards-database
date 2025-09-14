import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Pichu",
		fr: "Pichu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		172,
	],

	hp: 30,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Let's Play!",
				fr: "On joue ?"
			},
			effect: {
				en: "Search your deck for a Baby Pokémon card and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				fr: "Cherchez une carte Bébé Pokémon dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)"
			},

		},
	],

	description: {
		fr: "Bien qu'il ne soit pas encore très doué pour stocker l'électricité, il peut tout de même envoyer de petites secousses s'il est amusé ou surpris."
	},

	variants: [
		{
			type: "reverse",
		}
	]
}

export default card
