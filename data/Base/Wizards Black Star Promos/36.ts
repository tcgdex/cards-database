import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Igglybuff",
		fr: "Toudoudou"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		174,
	],

	hp: 30,

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
				en: "Good Night Song",
				fr: "Chanson du Marchand de sable"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},

		},
	],

	description: {
		en: "Its extremely flexible and elastic body makes it bounce continuously—anytime, anywhere.",
		fr: "Son corps extrêmement flexible et élastique le fait rebondir continuellement ─ tout le temps, et dans toutes les directions."
	},

	thirdParty: {
		tcgplayer: 86259
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
