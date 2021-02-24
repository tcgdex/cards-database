import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		465,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Power Whip",
				fr: "Mégafouet",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each basic Energy card attached to Tangrowth to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts pour chaque carte Énergie de base attachée à Bouldeneu. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stick and Absorb",
				fr: "Colle et absorbe",
			},
			effect: {
				en: "Remove 3 damage counters from Tangrowth. The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Retirez à Bouldeneu 3 marqueurs de dégât. Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
