import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [131],

	hp: 110,

	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Wintry Call",
				de: "Winterlicher Ruf"
			},
			effect: {
				en: "Search your deck for up to 2 Melony cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Mel-Karten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			}
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				en: "Icy Wind",
				de: "Eissturm"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670471,
				tcgplayer: 281485
			}
		}
	]
}

export default card

