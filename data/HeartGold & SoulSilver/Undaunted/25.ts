import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		461,
	],
	hp: 80,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Claw Snag",
				fr: "Griffentaille",
			},
			effect: {
				en: "Once during your turn, when you play Weavile from your hand to evolve 1 of your Pokémon, you may look at your opponent's hand. Choose a card from your opponent's hand and discard it.",
				fr: "Une seule fois pendant votre tour, lorsque vous jouez Dimoret de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez demander à voir la main de votre adversaire. Choisissez une carte dans la main de votre adversaire et défaussez-la.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers et les Poké-Bodies ou tout autre effet en action sur ce Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
