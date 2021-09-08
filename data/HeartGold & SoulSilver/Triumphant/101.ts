import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Palkia & Dialga LEGEND",
		fr: "Palkia & Dialga LÉGENDE",
	},

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣+江場左知子",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 160,

	types: [
		"Water",
		"Metal",
	],

	suffix: "Legend",

	attacks: [
		{

			name: {
				fr: "",
			},
			effect: {
				fr: "Vous ne pouvez placer cette carte sur votre Banc que si vous placez en même temps l’autre moitié de Palkia & Dialga LÉGENDE.",
			},

		},
	],

	stage: "Basic",
	retreat: 0
}

export default card
