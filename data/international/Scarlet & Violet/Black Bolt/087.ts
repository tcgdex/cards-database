import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [495],
	set: Set,

	name: {
		'en-us': "Snivy",
		'fr-fr': "Vipélierre",
		'de-de': "Serpifeu",
		'it-it': "Snivy",
		'pt-br': "Snivy",
		'es-es': "Snivy",
		'es-mx': "Snivy"
	},

	illustrator: "Yoshimi Miyoshi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'it-it': "Azione",
			'pt-br': "Investida",
			'es-es': "Placaje",
			'es-mx': "Tacleada"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Vine Whip",
			'fr-fr': "Fouet Lianes",
			'de-de': "Rankenhieb",
			'it-it': "Frustata",
			'pt-br': "Chicote de Vinha",
			'es-es': "Látigo Cepa",
			'es-mx': "Látigo Cepa"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836082,
				tcgplayer: 642536
			}
		},
	]
}

export default card
