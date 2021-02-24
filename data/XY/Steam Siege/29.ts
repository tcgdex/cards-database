import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Gastrodon",
		fr: "Tritosor",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		423,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Shellos",
		fr: "Sancoki",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sticky Shot",
				fr: "Coup Gluant",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more, and its Retreat Cost is Colorless more.",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus, et son Coût de Retraite est augmenté de Colorless.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
