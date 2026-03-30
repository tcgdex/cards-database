import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Archéduc-ex",
	},
	set: Set,
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	stage: "Stage2",
	evolveFrom: {
		fr: "Efflèche",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Œil de Sniper",
			},
			effect: {
				fr: "Si votre adversaire a exactement 4 cartes dans sa main, ignorez toutes les Énergies Incolore dans le coût des attaques utilisées par ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Flèche Écrasante",
			},
			damage: "240",
			effect: {
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 877517
	}
}

export default card
