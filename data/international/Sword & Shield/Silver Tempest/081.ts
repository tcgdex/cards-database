import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [677],
	set: Set,

	name: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'it-it': "Espurr",
		'pt-br': "Espurr",
		'de-de': "Psiau"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Mumble",
			'fr-fr': "Murmure",
			'es-es': "Farfullar",
			'it-it': "Borbottio",
			'pt-br': "Resmungo",
			'de-de': "Grummeln"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Though Espurr's expression never changes, behind that blank stare is an intense struggle to contain its devastating psychic power.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682128,
				tcgplayer: 451735
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682128,
				tcgplayer: 451735
			}
		},
	],
}

export default card
