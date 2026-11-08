import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [637],
	set: Set,

	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
		'es-es': "Volcarona",
		'de-de': "Ramoth",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'es-mx': "Volcarona"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'de-de': "Ignivor",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'es-mx': "Larvesta"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Smoldering Scales",
			'fr-fr': "Écailles Ardentes",
			'es-es': "Escamas Ardientes",
			'de-de': "Glühender Flügelstaub",
			'it-it': "Scaglie Ardenti",
			'pt-br': "Escamas Escaldantes",
			'es-mx': "Escamas Ardientes"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Mitsuhiro Arita",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817181,
				tcgplayer: 623456
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817181,
				tcgplayer: 623456
			}
		},
	],
}

export default card
