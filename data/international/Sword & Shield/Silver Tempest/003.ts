import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [167],
	set: Set,

	name: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'de-de': "Käferbiss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Although the poison from its fangs isn't that strong, it's potent enough to weaken prey that gets caught in its web.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682042,
				tcgplayer: 451622
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682042,
				tcgplayer: 451622
			}
		},
	],
}

export default card
