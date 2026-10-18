import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Snorunt",
		es: "Snorunt",
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		361,
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
				en: "Icy Snow",
				es: "Nieve Helada",
			},

			damage: 10,
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "What a delicious-looking snowman! I think I'll sneak a bite. It's OK…no one's looking, right?",
		es: "¡Qué muñeco de nieve más apetitoso! Creo que le voy a dar mordisquito. Nadie está mirando, ¿verdad?",
	},

	thirdParty: {
		tcgplayer: 113749
	}
}

export default card
