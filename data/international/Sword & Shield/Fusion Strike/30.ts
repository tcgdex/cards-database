import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [38],
	set: Set,

	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'es-es': "Ninetales",
		'it-it': "Ninetales",
		'pt-br': "Ninetales",
		'de-de': "Vulnona"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "kirisAki",

	description: {
		'en-us': "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse."
	},

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Supernatural Flames",
			'fr-fr': "Flammes Surnaturelles",
			'de-de': "Übernatürliche Flammen",
			'es-es': "Llamas Sobrenaturales",
			'pt-br': "Chamas Sobrenaturais",
			'it-it': "Fiamme Soprannaturali"
		},

		damage: 70
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582164,
				tcgplayer: 253126
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582164,
				tcgplayer: 253126
			}
		},
	],
}

export default card
