import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Swablu",
		fr: "Tylton"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		333,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fluff",
				fr: "Coton"
			},
			effect: {
				en: "Whenever Swablu would be damaged or affected by an opponent's attack and already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack, including damage, done to Swablu.",
				fr: "Dès qu'une attaque de votre adversaire inflige des dégâts ou affecte Tylton et si Tylton possède déjà un marqueur de dégât, lancez une pièce. Si c'est face, prévenez tous les effets infligés à Tylton, dégâts inclus, lors de cette attaque."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
