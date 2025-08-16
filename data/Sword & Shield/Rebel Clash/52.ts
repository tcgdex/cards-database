import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [846],

	name: {
		en: "Arrokuda",
		fr: "Embrochet",
		es: "Arrokuda",
		it: "Arrokuda",
		pt: "Arrokuda",
		de: "Pikuda"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
				es: "Golpe de Lluvia",
				it: "Spruzzapioggia",
				pt: "Chuva Borrifante",
				de: "Regenplatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Water"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "If it sees any movement around it, this Pokémon charges for it straightaway, leading with its sharply pointed jaw. It's very proud of that jaw."
	},

	thirdParty: {
		cardmarket: 457698,
		tcgplayer: 213133
	}
}

export default card
