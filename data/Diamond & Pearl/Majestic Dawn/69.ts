import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Omanyte",
		fr: "Amonita",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		138,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Helix Fossil",
		fr: "Fossile Nautile",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Call Up",
				fr: "Mobilisation",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your discard pile for Helix Fossil, Dome Fossil, or Old Amber and put it onto your Bench. This power can't be used if Omanyte is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez Fossile Nautile, Fossile Dôme ou Vieil Ambre dans votre deck et placez-la sur votre Banc. Ce pouvoir ne peut pas être utilisé si Amonita est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wash Over",
				fr: "Gros lavage",
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
