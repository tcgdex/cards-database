import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Kyogre & Groudon LEGEND",
		fr: "Kyogre & Groudon LÉGENDE",
	},

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口 真嗣 + 江場 左知子",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 150,

	types: [
		"Water",
		"Fighting",
	],

	suffix: "Legend",

	attacks: [
		{

			name: {
				fr: "",
			},
			effect: {
				fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Kyogre & Groudon LÉGENDE.",
			},

		},
	],

	stage: "Basic",
	retreat: 0
}

export default card
