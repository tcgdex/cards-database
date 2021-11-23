import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		fr: "Onix",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Harden",
				fr: "Armure",
			},
			effect: {
				en: "During your opponent's next turn, if Onix would be damaged by an attack, prevent that attack's damage done to Onix if that damage is 40 or less.",
				fr: "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Onix, prévenez ces dégâts s'ils sont de 40 ou moins.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bind",
				fr: "Étreinte",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		fr: "Il provoque des secousses sismiques en creusant. Il peut atteindre les 80 km/h."
	}
}

export default card
