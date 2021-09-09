import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Rayquaza & Deoxys LEGEND",
		fr: "Rayquaza & Deoxys LÉGENDE",
	},

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣 + 江場左知子",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 140,

	types: [
		"Colorless",
		"Psychic",
	],

	suffix: "Legend",

	attacks: [
		{

			name: {
				fr: "",
			},
			effect: {
				fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Rayquaza & Deoxys LÉGENDE.",
			},

		},
	],

	stage: "Basic",
	retreat: 0
}

export default card
