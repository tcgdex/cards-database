import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Unown [G]",
		fr: "Zarbi G"
	},

	illustrator: "CR CG gangs",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "[Give]",
				fr: "[Give]"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Unown G, Unown I, Unown V, and Unown E on your Bench, you may flip a coin. If heads, search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Une fois pendant votre tour (avant votre attaque), si vous avez Zarbi [G], Zarbi [I], Zarbi [V] et Zarbi [E] sur votre Banc, vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck une carte Énergie de base et attachez-la à un de vos Pokémon. Mélangez ensuite votre deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	}
}

export default card
