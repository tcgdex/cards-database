import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Lurantis",
		fr: "Floramantis",
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		754,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Fomantis",
		fr: "Mimantis",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Petal Blizzard",
				fr: "Tempête Florale",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sol Slice",
				fr: "Tranche-Soleil",
			},
			effect: {
				en: "If this Pokémon has any Fire Energy attached to it, this attack does 50 more damage.",
				fr: "Si de l’Énergie Fire est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
