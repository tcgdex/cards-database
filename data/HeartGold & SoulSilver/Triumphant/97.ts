import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lost Link",
				fr: "Lien perdu",
			},
			effect: {
				en: "Mew can use the attacks of all of the Pokémon in the Lost Zone (both yours and your opponent’s). (You still need the necessary Energy to use each attack.)",
				fr: "Mew peut utiliser les attaques de tous les Pokémon dans la Zone Perdue (les vôtres et ceux de votre adversaire). (Vous devrez néanmoins avoir suffisamment d’Énergie pour utiliser chaque attaque.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "See Off",
				fr: "Perdu de vue",
			},
			effect: {
				en: "Search your deck for 1 Pokémon and put it in the Lost Zone. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon dans votre deck et placez-le dans la Zone Perdue. Mélangez ensuite votre deck.",
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
