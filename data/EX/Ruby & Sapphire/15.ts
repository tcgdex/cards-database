import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Brasegali",
		de: "Lohgock"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Combusken",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clutch",
				fr: "Serre",
				de: "Clutch"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite tant que le prochain tour de votre adversaire n'est pas terminé.",
				de: "The Defending Pokémon can't retreat until the end of your opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flamme",
				de: "Flamethrower"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Blaziken.",
				fr: "Défaussez une carte Énergie  attachée à Brasegali.",
				de: "Discard a  Energy card attached to Blaziken."
			},
			damage: 80,

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
