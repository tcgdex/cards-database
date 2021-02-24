import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Jirachi ◇",
		fr: "Jirachi ",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 80,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wish Upon a Star",
				fr: "Soupir aux Étoiles",
			},
			effect: {
				en: "If you took this Pokémon as a face-down Prize card during your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench and take 1 more Prize card.",
				fr: "Si vous avez obtenu ce Pokémon en récupérant une carte Récompense face cachée lors de votre tour, et si votre banc n’est pas plein, plutôt que d’ajouter cette carte à votre main, vous pouvez la placer sur votre Banc et récupérer une carte Récompense supplémentaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Perish Dream",
				fr: "Rêve Languissant",
			},
			effect: {
				en: "This Pokémon is now Asleep. At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
				fr: "Ce Pokémon est maintenant Endormi. À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera K.O.",
			},
			damage: 10,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
