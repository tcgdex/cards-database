import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [928],
	set: Set,

	name: {
		'en-us': "Smoliv",
		'fr-fr': "Olivini",
		'es-es': "Smoliv",
		'it-it': "Smoliv",
		'pt-br': "Smoliv",
		'de-de': "Olini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "yuu",

	description: {
		'en-us': "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",
	},

	thirdParty: {
        cardmarket: 702316,
        tcgplayer: 487857
    }
}

export default card