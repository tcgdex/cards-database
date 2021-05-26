import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},
	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		417,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Snuggly Generator",
				fr: "Générateur Douillet",
			},
			effect: {
				en: "For each of your Benched Pokémon that has the Nuzzle attack, search your deck for a Lightning Energy card and attach it to that Pokémon. Then, shuffle your deck.",
				fr: "Pour chacun de vos Pokémon de Banc ayant l’attaque Frotte-Frimousse, cherchez une carte Énergie Lightning dans votre deck et attachez-la au Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Nuzzle",
				fr: "Frotte-Frimousse",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},

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
	retreat: 1,



}

export default card
