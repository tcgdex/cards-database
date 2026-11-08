import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [661],
	set: Set,

	name: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 10
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
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "Its melodious cries are actually warnings. Fletchling will mercilessly peck at anything that enters its territory.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682197,
				tcgplayer: 451799
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682197,
				tcgplayer: 451799
			}
		},
	],
}

export default card
