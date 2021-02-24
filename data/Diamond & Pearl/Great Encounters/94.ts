import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Whismur",
		fr: "Chuchmur",
	},
	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		293,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Mumble",
				fr: "Marmonner",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Uproar",
				fr: "Brouhaha",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
