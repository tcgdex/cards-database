import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Swablu",
		fr: "Tylton",
		de: "Wablu"
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
				fr: "Coton",
				de: "Fluff"
			},
			effect: {
				en: "Whenever Swablu would be damaged or affected by an opponent's attack and already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack, including damage, done to Swablu.",
				fr: "Dès qu'une attaque de votre adversaire inflige des dégâts ou affecte Tylton et si Tylton possède déjà un marqueur de dégât, lancez une pièce. Si c'est face, prévenez tous les effets infligés à Tylton, dégâts inclus, lors de cette attaque.",
				de: "Whenever Swablu would be damaged or affected by an opponent's attack and already has at leats 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack, including damage, done to Swablu."
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
				fr: "Picpic",
				de: "Peck"
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


	retreat: 1,

	thirdParty: {
		tcgplayer: 89654,
		cardmarket: 276482
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
