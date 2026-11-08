import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
		'de-de': "Flampion",
		'it-it': "Darumaka",
		'pt-br': "Darumaka",
		'es-es': "Darumaka",
		'es-mx': "Darumaka"
	},

	illustrator: "Tomowaka",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'de-de': "Irrlicht",
			'it-it': "Fuocofatuo",
			'pt-br': "Fogo Fátuo",
			'es-es': "Fuego Fatuo",
			'es-mx': "Fuego Fatuo"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836101,
				tcgplayer: 642547
			}
		},
	]
}

export default card
