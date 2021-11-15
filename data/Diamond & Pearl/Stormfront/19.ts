import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Leviator"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Tail Revenge",
				fr: "Queue vengeance",
			},
			effect: {
				en: "Does 30 damage times the number of Magikarp in your discard pile.",
				fr: "Inflige 30 dégâts multipliés par le nombre de Magicarpes dans votre pile de défausse.",
			},
			damage: "30×",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wreak Havoc",
				fr: "Causer des ravages",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard the top card from your opponent's deck.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Beat",
				fr: "Draco-battement",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card from each of your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie de chacun des Pokémon de votre adversaire.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
