import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fragrance Trap",
				fr: "Piège Parfumé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Corrosive Acid",
				fr: "Acide Corrosif",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
