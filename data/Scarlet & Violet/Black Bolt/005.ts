import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [512],
	set: Set,

	name: {
		en: "Simisage",
		fr: "Feuiloutan",
		de: "Vegichita",
		it: "Simisage",
		pt: "Simisage",
		es: "Simisage",
		'es-mx': "Simisage"
	},

	illustrator: "kurumitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
		de: "Vegimak",
		it: "Pansage",
		pt: "Pansage",
		es: "Pansage",
		'es-mx': "Pansage"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			pt: "Tapinha",
			es: "Bofetada Gentil",
			'es-mx': "Cachetadita"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835912
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835912
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836262
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836272
			}
		}
	],
}

export default card
