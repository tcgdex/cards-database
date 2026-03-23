import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Noctali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [197],
	hp: 100,
	types: ["Darkness"],

	stage: "Stage1",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Évolution de l'Énergie",
			},
			effect: {
				fr: "Lorsque vous attachez pendant votre tour une carte Énergie de base de votre main à ce Pokémon, vous pouvez chercher dans votre deck une carte qui est l'évolution de ce Pokémon et du même type que cette carte Énergie. Mettez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Pioche Rapide",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, piochez une carte.",
			},
		},
	],
}

export default card
