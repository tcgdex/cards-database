import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Klawf",
		fr: "Craparoi",
		es: "Klawf",
		it: "Klawf",
		pt: "Klawf",
		de: "Klibbe"
	},

	illustrator: "nagimiso",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [950],

	hp: 130,

	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				en: "Vise Grip",
				fr: "Force Poigne",
				es: "Agarre",
				it: "Presa",
				pt: "Agarramento Compressor",
				de: "Klammer"
			},
			damage: 50,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				en: "Adrenaline Hammer",
			},
			damage: 130,
			effect: {
				en: "This Pokémon is now Confused.",
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725428,
				tcgplayer: 516522
			}
		}
	]
}

export default card

