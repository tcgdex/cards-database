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

	illustrator: "Susumu Maeya",
	rarity: "Common",
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835903,
				tcgplayer: 642450
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835903,
				tcgplayer: 642450
			}
		},
		{
			type: "holo",
			foil: "tinsel",
			thirdParty: {
				cardmarket: 836667,
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836259,
				tcgplayer: 642696
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836269,
				tcgplayer: 642624
			}
		}
	],

	retreat: 1,
	regulationMark: "I",
}

export default card
