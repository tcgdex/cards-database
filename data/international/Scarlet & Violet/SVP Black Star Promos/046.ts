import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1],
	set: Set,

	name: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'es-es': "Bulbasaur",
		'it-it': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'de-de': "Bisasam"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'es-es': "Látigo Cepa",
			'it-it': "Frustata",
			'pt-br': "Chicote de Vinha",
			'de-de': "Rankenhieb"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	illustrator: "OKACHEKE",
	description: {
		'en-us': "While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 720944,
				tcgplayer: 517271
			},
		}
	],
}

export default card
