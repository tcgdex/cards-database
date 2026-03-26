import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [637],
	set: Set,

	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		de: "Ramoth",
		it: "Volcarona",
		pt: "Volcarona",
		'es-mx': "Volcarona"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
		es: "Larvesta",
		de: "Ignivor",
		it: "Larvesta",
		pt: "Larvesta",
		'es-mx': "Larvesta"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Smoldering Scales",
			fr: "Écailles Ardentes",
			es: "Escamas Ardientes",
			de: "Glühender Flügelstaub",
			it: "Scaglie Ardenti",
			pt: "Escamas Escaldantes",
			'es-mx': "Escamas Ardientes"
		},

		damage: 80
	}],

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
