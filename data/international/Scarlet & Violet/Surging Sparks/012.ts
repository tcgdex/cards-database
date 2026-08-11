import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [951],
	set: Set,

	name: {
		'en-us': "Capsakid",
		'fr-fr': "Pimito",
		'es-es': "Capsakid",
		'it-it': "Capsakid",
		'pt-br': "Capsakid",
		'de-de': "Chilingel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise",
			'es-es': "Bote Cabezazo",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'de-de': "Abrupter Kopfstoß"
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
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794267,
				tcgplayer: 589886
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794267,
				tcgplayer: 589886
			}
		},
	],

	illustrator: "Julie Hang",
	
}

export default card
