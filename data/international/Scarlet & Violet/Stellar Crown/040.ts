import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [657],
	set: Set,

	name: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
		'es-es': "Frogadier",
		'it-it': "Frogadier",
		'pt-br': "Frogadier",
		'de-de': "Amphizel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
		'es-es': "Froakie",
		'it-it': "Froakie",
		'pt-br': "Froakie",
		'de-de': "Froxy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante",
			'de-de': "Wellenplatscher"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785894,
				tcgplayer: 567266
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785894,
				tcgplayer: 567266
			}
		},
	],

	illustrator: "Ryuta Fuse",

}

export default card
