import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
		fr: "Ultrigaria",
	},
	stage: "Stage2",


	attacks: [
		{

			name: {
				en: "Burning Scent",
				fr: "Odeur de brûlé",
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Poisoned. Before applying these effects, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Burned and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Avant d'appliquer ces effets, vous pouvez échanger 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Brûlé et Empoisonné.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Energy Dissolve",
				fr: "Élimination d'Énergie",
			},
			effect: {
				en: "Discard an Energy attached to the Defending Pokémon at the end of your opponent's next turn.",
				fr: "Défaussez une Énergie attachée au Pokémon Défenseur à la fin du prochain tour de votre adversaire.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 3,



}

export default card
