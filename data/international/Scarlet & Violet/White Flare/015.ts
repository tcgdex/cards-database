import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [514],
	set: Set,

	name: {
		'en-us': "Simisear",
		'fr-fr': "Flamoutan",
		'de-de': "Grillchita",
		'it-it': "Simisear",
		'pt-br': "Simisear",
		'es-es': "Simisear",
		'es-mx': "Simisear"
	},

	illustrator: "Julie Hang",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
		'de-de': "Grillmak",
		'it-it': "Pansear",
		'pt-br': "Pansear",
		'es-es': "Pansear",
		'es-mx': "Pansear"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'de-de': "Sanfter Hieb",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'es-es': "Bofetada Gentil",
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
				cardmarket: 835930,
				tcgplayer: 642130
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835930,
				tcgplayer: 642130
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836519,
				tcgplayer: 642375
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836520,
				tcgplayer: 642303
			}
		},
	],
}

export default card
