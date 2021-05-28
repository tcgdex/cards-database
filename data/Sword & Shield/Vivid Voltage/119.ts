import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Metal",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dreamy Revelation",
				fr: "Révélation Onirique"
			},
			effect: {
				en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card back on top of your deck.",
				fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l’une d’elles à votre main. Placez l’autre carte sur le dessus de votre deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Fighting",
				"Metal",
			],
			name: {
				en: "Amazing Star",
				fr: "Étoile Magnifique"
			},
			effect: {
				en: "Search your deck for up to 7 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 7 cartes Énergie de base, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck."
			},

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
