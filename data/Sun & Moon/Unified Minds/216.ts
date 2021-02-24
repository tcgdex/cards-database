import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Heatran-GX",
		fr: "Heatran-GX",
	},
	illustrator: "ConceptLab",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		485,
	],
	hp: 190,
	types: [
		"Fire",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Burning Road",
				fr: "Route Enflammée",
			},
			effect: {
				en: "Once during your turn, when this Pokémon moves from your Bench to become your Active Pokémon, you may move any number of Fire Energy from your other Pokémon to it.",
				fr: "Une seule fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc pour devenir votre Pokémon Actif, vous pouvez déplacer autant d’Énergies Fire que vous le voulez de vos autres Pokémon vers lui.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Steaming Stomp",
				fr: "Piétinement Fumant",
			},

			damage: 130,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Hot Burn-GX",
				fr: "Brûlure Torride-GX",
			},
			effect: {
				en: "This attack does 50 damage times the amount of Fire Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies Fire attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
