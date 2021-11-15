import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Flareon Star",
		fr: "Pyroli"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Crimson Ray",
				fr: "Rayon rouge"
			},
			effect: {
				en: "Once during your turn, when you put Flareon Star from your hand onto your Bench, you may use this power. Each Active Pokémon (both yours and your opponent's) is now Burned.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Pyroli  de votre main sur votre Banc, vous pouvez utiliser ce pouvoir. Chaque Pokémon Actif (les vôtres et ceux de votre adversaire) est maintenant Brûlé."
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
				en: "Flamethrower",
				fr: "Lance-flamme"
			},
			effect: {
				en: "Discard a Fire Energy attached to Flareon Star.",
				fr: "Défaussez une Énergie  attachée à Pyroli ."
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





}

export default card
