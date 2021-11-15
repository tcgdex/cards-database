import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Jolteon Star",
		fr: "Voltali"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Yellow Ray",
				fr: "Rayon jaune"
			},
			effect: {
				en: "Once during your turn, when you put Jolteon Star from your hand onto your Bench, you may put 1 damage counter on each Active Pokémon (both yours and your opponent's).",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Voltali  de votre main sur votre Banc, vous pouvez placer 1 marqueur de dégât sur chaque Pokémon Actif (les vôtres et ceux de votre adversaire)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Jolteon Star during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Voltali  lors du prochain tour de votre adversaire."
			},
			damage: 40,

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
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
