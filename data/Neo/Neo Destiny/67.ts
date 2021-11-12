import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Gligar",
		fr: "Scorplane"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		207,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],

			name: {
				en: "Stun Poison",
				fr: "Poison neural"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné."
			},

			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il passe ses journées accroché aux falaises, attendant de fondre sur sa proie depuis son poste d'observation."
	}
}

export default card
