import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Omastar",
		de: "Amoroso"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Omanyte",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Stare",
				de: "Ursprüngliche Starre"
			},
			effect: {
				en: "As long as Omastar is your Active Pokémon, your opponent can't play Basic Pokémon or Evolution cards from his or her hand to evolve his or her Active Pokémon.",
				de: "Solange Amoroso dein aktives Pokémon ist, kann dein Gegner keinen Basis- Pokémon oder Entwicklungskarte aus seine Hand spielen, um sein aktives Pokémon zu entwickeln."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Spook",
				de: "Herumgeistern"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				de: "Das verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
