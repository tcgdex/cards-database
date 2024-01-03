import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Brasegali",
		de: "Lohgock"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fire Breath",
				fr: "Haleine de feu",
				de: "Fire Breath"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. That Pokémon is now Burned. This power can't be used if Blaziken is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Brûlé. Ce pouvoir ne peut pas être utilisé si Brasegali est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. That Pokémon is now Burned. This power can't be used if Blaziken is affected by a Special Condition."
			},
		},
	],
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
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "The Defending Pokémon can't retreat during your opponent's next turn."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danseflamme",
				de: "Fire Spin"
			},
			effect: {
				en: "Discard 2 Energy attached to Blaziken.",
				fr: "Défaussez 2 Énergies attachées à Brasegali.",
				de: "Discard 2 Energy attached to Blaziken."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	retreat: 1,



}

export default card
