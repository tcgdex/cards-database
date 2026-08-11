import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Ledian δ",
		fr: "Coxyclaque δ",
		de: "Ledian"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		166,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Ledyba",
		fr: "Coxy"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Prowl",
				fr: "Rôder",
				de: "Pirschen"
			},
			effect: {
				en: "Once during your turn, when you play Ledian from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Coxyclaque de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir dans votre deck n'importe quelle carte. Placez-la dans votre main. Ensuite, mélangez votre deck.",
				de: "Einmal während deines Zuges, wenn du Ledian von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dein Deck nach 1 Karte durchsuchen und diese auf die Hand nehmen. Mische dein Deck danach."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Star",
				fr: "Étoile métallique",
				de: "Metallstern"
			},
			effect: {
				en: "If Ledian has a Pokémon Tool card attached to it, draw 3 cards.",
				fr: "Si Coxyclaque possède une carte Outil Pokémon, piochez 3 cartes.",
				de: "Wenn an Ledian eine Pokémon-Ausrüstung angelegt ist, ziehe 3 Karten."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 277223
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
