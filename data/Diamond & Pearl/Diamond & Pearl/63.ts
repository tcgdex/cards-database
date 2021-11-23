import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Silcoon",
		fr: "Armulys",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		266,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Harden",
				fr: "Armure",
			},
			effect: {
				en: "During your opponent's next turn, if Silcoon would be damaged by an attack, prevent that attack's damage done to Silcoon if that damage is 30 or less.",
				fr: "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Armulys, prévenez ces dégâts s'ils sont de 30 ou moins.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Entangling String",
				fr: "Fil emmêlant",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		fr: "Il s'accroche en enroulant sa soie autour des branches. Il reste immobile en attendant d'évoluer."
	}
}

export default card
