import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Memories of Dawn",
				fr: "Souvenirs Originels",
			},
			effect: {
				en: "This Pokémon can use the attacks of any of your Basic Pokémon in play. (You still need the necessary Energy to use each attack.)",
				fr: "Ce Pokémon peut utiliser les attaques de n'importe lequel de vos Pokémon de base en jeu. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Encounter",
				fr: "Rencontre",
			},
			effect: {
				en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
