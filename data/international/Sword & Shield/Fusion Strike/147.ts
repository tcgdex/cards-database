import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [529],
	set: Set,

	name: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		'en-us': "It's a digger, using its claws to burrow through the ground. It causes damage to vegetable crops, so many farmers have little love for it."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'es-es': "Arañazo",
			'pt-br': "Arranhão",
			'it-it': "Graffio"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582775,
				tcgplayer: 253361
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582775,
				tcgplayer: 253361
			}
		},
	],
}

export default card
