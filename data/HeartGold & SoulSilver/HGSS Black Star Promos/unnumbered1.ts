import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Zorua and Celebi",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Black Star Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		570,
		251
	],
	hp: 90,
	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Grass"
			],
			name: {
				en: "Who is Who?"
			},
			effect: {
				en: "Each player switches places with his or her opponent. Then, each player continues to play the game using his or her opponent's cards."
			}
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			size: "jumbo"
		}
	]
}

export default card
