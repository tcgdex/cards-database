import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
		de: "Porygon-Z"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Mode Crash",
				fr: "Mode crash",
				de: "Absturzmodus"
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Porygon-Z LV.X from your hand onto your Active Porygon-Z, you may discard all of your opponent's Special Energy cards in play.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Porygon-Z LV.X de votre main sur votre Porygon-Z Actif, vous pouvez défausser toutes les cartes Énergie Spéciale que votre adversaire a en jeu.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Porygon-Z LV.X von deiner Hand auf dein aktives Porygon-Z legst, alle Spezial-Energiekarten, die an Pokémondeines Gegners angelegt sind, auf seinen Ablagestapel legen."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278149
	}
}

export default card
