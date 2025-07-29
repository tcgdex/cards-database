import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Negapi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		312,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Wave",
				fr: "Cage-éclair"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spark",
				fr: "Étincelle"
			},
			effect: {
				en: "Choose 2 of your opponent’s Benched Pokémon. This attack does 10 damage to each of those Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon du Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc)."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277426
	}
}

export default card
