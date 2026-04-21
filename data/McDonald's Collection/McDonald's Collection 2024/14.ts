import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
		es: "Rayquaza",
		it: "Rayquaza",
		pt: "Rayquaza",
		de: "Rayquaza"
	},

	illustrator: "so-taro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [384],

	hp: 130,

	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Jaw Lock",
				fr: "Croque Fort",
				es: "Bloqueo de Mandíbulas",
				it: "Serrafauci",
				pt: "Travamento de Mandíbula",
				de: "Kiefersperre"
			},
			damage: 30,
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Power Blast",
			},
			damage: 120,
			effect: {
				en: "Discard an Energy from this Pokémon.",
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
			value: "-30"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802836,
				tcgplayer: 614383
			}
		}
	]
}

export default card

