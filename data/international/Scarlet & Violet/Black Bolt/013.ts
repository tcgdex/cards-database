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

	illustrator: "svlt",
	rarity: "Common",
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
			type: "normal",
			thirdParty: {
				cardmarket: 835929,
				tcgplayer: 642462
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835928,
				tcgplayer: 642462
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836283,
				tcgplayer: 642707
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836284,
				tcgplayer: 642635
			}
		}
	],
	 // thirdParty: {
	 //	cardmarket: 835928
	 // }
}

export default card
