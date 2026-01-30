import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Tauros",
		fr: "Tauros",
		de: "Tauros"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		128,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Crush Chance",
				fr: "Écras'chance",
				de: "Chancenvernichter"
			},
			effect: {
				en: "Once during your turn, when you put Tauros from your hand onto your Bench, you may discard a Stadium card in play.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Tauros de votre main sur votre Banc, vous pouvez défausser une carte Stade en jeu.",
				de: "Während deines Zuges, wenn du Tauros von deiner Hand auf die Bank legst, kannst du ein Mal eine Stadion-Karte, die sich im Spiel befindet, auf den Ablagestapel legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon-Karten und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud'korne",
				de: "Hornattacke"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277093,
		tcgplayer: 89763
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			stamp: ["dylan-lefavour"]
		}
	]
}

export default card
