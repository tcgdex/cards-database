import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Fletchling",
		es: "Fletchling",
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		661,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Warble",
				es: "Trinar",
			},
			effect: {
				en: "Search your deck for up to 2 Fletchling, reveal them, and put them into your hand. Shuffle your deck afterward.",
				es: "Busca en tu baraja hasta 2 Fletchling, enséñaselos y ponlos en tu mano. Baraja las cartas de tu baraja después.",
			},
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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Little friends, thanks for always helping me look so cute!",
		es: "Amiguitos, ¡gracias por ayudarme a estar siempre tan mona!",
	},

	thirdParty: {
		tcgplayer: 113768
	}
}

export default card
