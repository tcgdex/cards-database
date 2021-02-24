import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		474,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cyber Crush",
				fr: "Cyber Broyage",
			},
			effect: {
				en: "Discard all Special Energy attached to each of your opponent's Pokémon.",
				fr: "Défaussez toutes les Énergies spéciales attachées à chacun des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slowing Beam",
				fr: "Rayon Ralentissant",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more.",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
