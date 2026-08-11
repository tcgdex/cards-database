import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [540],
	set: Set,

	name: {
		'en-us': "Sewaddle",
		'fr-fr': "Larveyette",
		'de-de': "Strawickl",
		'it-it': "Sewaddle",
		'pt-br': "Sewaddle",
		'es-es': "Sewaddle",
		'es-mx': "Sewaddle"
	},

	illustrator: "nisimono",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'de-de': "Käferbiss",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'es-es': "Picadura",
			'es-mx': "Picadura"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836071,
				tcgplayer: 642202
			}
		},
	],
}

export default card
