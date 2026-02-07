import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [75],
	set: Set,

	name: {
		en: "Graveler",
		fr: "Gravalanch"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Geodude",
		fr: "Racaillou"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless"
			],
			name: {
				en: "Rock Cannon",
				fr: "Canon à pierres"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},
			damage: "30×"
		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Rock Slide",
				fr: "Éboulement"
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: "40"
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "20+"
		}
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		}
	],

	description: {
		en: "GRAVELER make their homes on sheer cliff faces by gouging out numerous horizontal holes."
	},

	retreat: 3
}

export default card
