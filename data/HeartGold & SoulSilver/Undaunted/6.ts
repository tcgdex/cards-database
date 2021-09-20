import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes calcinantes",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Lava Flow",
				fr: "Torrent de lave",
			},
			effect: {
				en: "You may discard any number of Fire Energy cards attached to Magcargo. If you do, this attack does 60 damage plus 20 damage for each Fire Energy card you discarded.",
				fr: "Vous pouvez défausser autant de cartes Énergie Fire attachées à Volcaropod que vous le souhaitez. Dans ce cas, cette attaque inflige 60 dégâts plus 20 dégâts pour chaque carte Énergie Fire que vous avez défaussée.",
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Its brittle shell occasionally spouts intense flames that circulate throughout its body."
	}
}

export default card
