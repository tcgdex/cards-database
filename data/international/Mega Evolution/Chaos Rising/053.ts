import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "The foul fluid from its rear is so revolting that it can make people feel queasy up to a mile and a quarter away.",
	},


	name: {
		'en-us': "Stunky",
		'fr-fr': "Moufouette",
		'es-es': "Stunky",
		'es-mx': "Stunky",
		'de-de': "Skunkapuh",
		'it-it': "Stunky",
		'pt-br': "Stunky"
	},

	illustrator: "Nobuhiro Imagawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [434],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'es-mx': "Arañazo",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'pt-br': "Arranhão"
		},

		cost: ["Darkness"],
		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886445,
				tcgplayer: 693549
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886445,
				tcgplayer: 693549
			}
		},
	],
}

export default card
