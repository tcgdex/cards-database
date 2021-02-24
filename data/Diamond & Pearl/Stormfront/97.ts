import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Heatran",
		fr: "Heatran LV.X",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		485,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		fr: "Heatran LV.X",
	},
	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Heat Metal",
				fr: "Chaleur métallique",
			},
			effect: {
				en: "Your opponent can't remove the Special Condition Burned by evolving or devolving his or her Burned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Burned Pokémon.) Whenever your opponent flips a coin for the Special Condition Burned between turns, treat it as tails.",
				fr: "Votre adversaire ne peut pas retirer l'État Spécial Brûlé en évoluant ou dés-évoluant son Pokémon Brûlé. (Cela comprend placer une carte Pokémon Niveau Sup sur le Pokémon Brûlé.) Lorsque votre adversaire lance une pièce pour l'État Spécial Brûlé entre deux tours, considérez que c'est une pile.",
			},
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
