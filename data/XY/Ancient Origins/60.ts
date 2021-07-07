import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Goodra",
		fr: "Muplodocus",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		706,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Liquid Blow",
				fr: "Coup Liquide",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent’s Pokémon for each Colorless in its Retreat Cost. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque Colorless dans son Coût de Retraite. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shining Breath",
				fr: "Souffle Étincelant",
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon can’t be affected by any Special Conditions.",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon ne peut être affecté par aucun État Spécial.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
