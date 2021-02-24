import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		392,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mach Punch",
				fr: "Mach Punch",
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Mega Bravo",
				fr: "Mega bravo",
			},
			effect: {
				en: "Discard all Fire Energy attached to Infernape. This attack does 40 damage times the amount of Fire Energy you discarded.",
				fr: "Défaussez toutes les Énergies Fire attachées à Simiabraz. Cette attaque inflige 40 dégâts multipliés par le nombre d'Énergies Fire défaussées.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],





}

export default card
