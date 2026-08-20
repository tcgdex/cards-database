import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		es: "Cyclizar",
		it: "Cyclizar",
		pt: "Cyclizar",
		de: "Mopex"
	},

	illustrator: "Ryota Murayama",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [967],

	hp: 110,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Touring",
				de: "Spritztour"
			},
			effect: {
				en: "Draw 2 cards.",
				de: "Ziehe 2 Karten."
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Speed Attack",
				fr: "Attaque Rapide",
				es: "Ataque Veloz",
				it: "Attacco Rapido",
				pt: "Ataque Veloz",
				de: "Tempoangriff"
			},
			damage: 100,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725431,
				tcgplayer: 516525
			}
		}
	]
}

export default card

