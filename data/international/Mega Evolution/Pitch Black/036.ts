import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'es-es': "Litwick",
		'es-mx': "Litwick",
		'de-de': "Lichtel",
		'it-it': "Litwick",
		'pt-br': "Litwick"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [607],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'es-es': "Fuego Fatuo",
			'es-mx': "Fuego Fatuo",
			'de-de': "Irrlicht",
			'it-it': "Fuocofatuo",
			'pt-br': "Fogo Fátuo"
		},

		cost: ["Psychic"],

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895823,
				tcgplayer: 704793
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895823,
				tcgplayer: 704793
			}
		},
	],
}

export default card
