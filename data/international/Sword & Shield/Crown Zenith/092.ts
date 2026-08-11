import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [624],
	set: Set,

	name: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It uses river stones to maintain the cutting edges of the blades covering its body. These sharpened blades allow it to bring down opponents.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691810,
				tcgplayer: 478230
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691810,
				tcgplayer: 478230
			}
		},
	],
}

export default card
