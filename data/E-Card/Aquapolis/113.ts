import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		72,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Gaz toxik"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Recover",
				fr: "Soin"
			},
			effect: {
				en: "Discard 1 Energy card attached to Tentacool in order to use this attack. Remove all damage counters from Tentacool.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Tentacool afin d'utiliser cette attaque. Retirez tous les marqueurs de dégâts sur Tentacool."
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
