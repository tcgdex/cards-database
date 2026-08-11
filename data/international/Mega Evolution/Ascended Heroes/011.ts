import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
		'es-es': "Wurmple",
		'es-mx': "Wurmple",
		'de-de': "Waumpel",
		'it-it': "Wurmple",
		'pt-br': "Wurmple"
	},

	illustrator: "USGMEN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [265],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'es-mx': "Picadura",
			'de-de': "Käferbiss",
			'it-it': "Coleomorso",
			'pt-br': "Picada"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It loves to eat leaves. If it is attacked by a Starly, it will defend itself with its spiked rear.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869622,
				tcgplayer: 675823
			}
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 870152,
				tcgplayer: 676860
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870151,
				tcgplayer: 677000
			}
		},
	],
}

export default card
