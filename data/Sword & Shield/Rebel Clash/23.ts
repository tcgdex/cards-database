import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Appletun",
		fr: "Dratatin"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Applin",
		fr: "Verpom"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Delicious Aroma",
				fr: "Arôme Délicieux"
			},
			effect: {
				en: "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent’s Benched Basic Pokémon with their Active Pokémon.",
				fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c’est face, échangez l’un des Pokémon de Banc de base de votre adversaire contre son Pokémon Actif."
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
				en: "Solar Beam",
				fr: "Lance-Soleil"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 90,
	types: ["Grass"],
	regulationMark: "D"
}

export default card
