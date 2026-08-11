import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu ex",
		'fr-fr': "Pikachu-ex",
		'es-es': "Pikachu ex",
		'it-it': "Pikachu-ex",
		'pt-br': "Pikachu ex",
		'de-de': "Pikachu-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Thunderbolt",
			'fr-fr': "Tonnerre",
			'es-es': "Rayo",
			'it-it': "Fulmine",
			'pt-br': "Relâmpago",
			'de-de': "Donnerblitz"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "takuyoa",
	variants: [
		{
			type: "holo"
		}
	],
}

export default card
