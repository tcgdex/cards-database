import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Quagsire δ",
		fr: "Maraiste δ ESPÈCES DELTA"
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
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dig up",
				fr: "Désenfouir"
			},
			effect: {
				en: "Once during your turn, when you play Quagsire from your hand to evolve 1 of your Pokémon, you may search your discard pile for up to 2 Pokémon Tool cards, show them to your opponent, and put them into your hand.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Maraiste de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir dans votre pile de défausse jusqu'à 2 cartes Outil Pokémon. Montrez-la à votre adversaire et placez-les dans votre main."
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
				fr: "Faire couler à flots"
			},
			effect: {
				en: "If Quagsire has a Pokémon Tool card attached to it, this attack does 50 damage plus 20 more damage.",
				fr: "Si Maraiste possède une carte Outil Pokémon, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires."
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





}

export default card
