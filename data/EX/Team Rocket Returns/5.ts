import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Houndoom",
		de: "Dunkles Hundemon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 70,

	types: [
		"Darkness",
		"Darkness",
	],

	evolveFrom: {
		en: "Houndour",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Shakedown",
				de: "Shakedown"
			},
			effect: {
				en: "Choose a card from your opponent's hand without looking and discard it.",
				de: "Choose a card from your opponent's hand without looking and discard it."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Fire",
				de: "Dark Fire"
			},
			effect: {
				en: "You may discard a Fire Energy or Darkness Energy attached to Dark Houndoom. If you do, this attack does 40 damage plus 20 more damage.\"",
				de: "You may discard a  Energy or  Energy attached to Dark Houndoom. If you do, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276297,
		tcgplayer: 84611
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		}
	]
}

export default card
