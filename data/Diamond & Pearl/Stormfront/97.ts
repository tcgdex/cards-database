import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Heatran",
		fr: "Heatran",
		de: "Heatran"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
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
				de: "Metall erhitzen"
			},
			effect: {
				en: "Your opponent can't remove the Special Condition Burned by evolving or devolving his or her Burned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Burned Pokémon.) Whenever your opponent flips a coin for the Special Condition Burned between turns, treat it as tails.",
				fr: "Votre adversaire ne peut retirer l'État Spécial Brûlé en évoluant ou dés-évoluant son Pokémon Brûlé. (Cela comprend placer une Carte Pokémon Niveau Sup sur le Pokémon Brûlé.) Lorsque votre adversaire lance une pièce pour l'État Spécial Brûlé entre deux tours, considérez que c'est pile.",
				de: "Dein Gegner kann den Speziellen Zustand \"verbrannt\" nicht durch Entwickeln oder Rückentwickeln von seinen Pokémon entfernen. (Dies gilt auch für das Spielen einer Pokémon Level-Up-Karte auf das verbrannte Pokémon.) Jedes Mal, wenn dein Gegner zwischen den Zügen eine Münze für den Speziellen Zustand \"verbrannt\" wirft, zählt das Ergebnis des Münzwurfs als \"Zahl\"."
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

	thirdParty: {
		cardmarket: 278395,
		tcgplayer: 86054
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
