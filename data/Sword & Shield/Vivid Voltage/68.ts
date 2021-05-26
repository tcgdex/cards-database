import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette"
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Curse of Devolution",
				fr: "Dés-Évolution Maudite"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may devolve 1 of your opponent’s Benched evolved Pokémon by putting the highest Stage Evolution card on it into your opponent’s hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez faire dés-évoluer l’un des Pokémon de Banc évolués de votre adversaire en plaçant la carte Évolution la plus élevée dans la main de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Spooky Shot",
				fr: "Tir Effrayant"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
