import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Purrloin",
		fr: "Chacripan",
		de: "Felilou",
		es: "Purrloin",
		it: "Purrloin",
		pt: "Purrloin",
		'es-mx': "Purrloin"
	},

	illustrator: "Hachinana",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
			de: "Schaufelkrallen",
			es: "Hundir Garras",
			it: "Scavazanne",
			pt: "Fincar Garras",
			'es-mx': "Clavar Garras"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728037,
				cardmarket: 918888
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728037,
				cardmarket: 918888
			}
		}
	],
}

export default card