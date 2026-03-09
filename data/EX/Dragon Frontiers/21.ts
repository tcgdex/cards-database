import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Quagsire δ",
		fr: "Maraiste δ",
		de: "Morlord"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		195,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dig up",
				fr: "Désenfouir",
				de: "Ausbuddeln"
			},
			effect: {
				en: "Once during your turn, when you play Quagsire from your hand to evolve 1 of your Pokémon, you may search your discard pile for up to 2 Pokémon Tool cards, show them to your opponent, and put them into your hand.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Maraiste de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir dans votre pile de défausse jusqu'à 2 cartes Outil Pokémon. Montrez-la à votre adversaire et placez-les dans votre main.",
				de: "Einmal während deines Zuges, wenn du Morlord von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du deinen Ablagestapel nach bis zu 2 Pokémon-Ausrüstungs-Karten durchsuchen. Zeige sie deinem Gegner und nimm sie auf die Hand."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pump Out",
				fr: "Faire couler à flots",
				de: "Hochpumpen"
			},
			effect: {
				en: "If Quagsire has a Pokémon Tool card attached to it, this attack does 50 damage plus 20 more damage.",
				fr: "Si Maraiste possède une carte Outil Pokémon, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn an Morlord eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277226
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
