import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Espurr",
		es: "Espurr",
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		677,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Twinkle",
				es: "Centelleo",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			},
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "My number one. Exceptionally cute. A little princess.",
		es: "Mi número uno. Excepcionalmente mona. Una princesita.",
	},

	thirdParty: {
		tcgplayer: 113756
	}
}

export default card
