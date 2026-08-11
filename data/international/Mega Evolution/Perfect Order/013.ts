import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [662],

	name: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'es-mx': "Fletchinder",
		'de-de': "Dartignis",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder"
	},

	evolveFrom: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'es-mx': "Fletchling",
		'de-de': "Dartiri",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'es-mx': "Llama",
			'de-de': "Flackern",
			'it-it': "Fiammata",
			'pt-br': "Chama"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684404,
				cardmarket: 877425
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684404,
				cardmarket: 877425
			}
		}
	],

}

export default card
