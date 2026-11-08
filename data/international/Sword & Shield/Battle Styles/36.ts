import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [223],
	set: Set,

	name: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'es-es': "Remoraid",
		'it-it': "Remoraid",
		'pt-br': "Remoraid",
		'de-de': "Remoraid"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'en-us': "Sharp Fin",
			'fr-fr': "Aileron Aiguisé",
			'es-es': "Cortaleta",
			'it-it': "Pinnaffilata",
			'pt-br': "Barbatana Afiada",
			'de-de': "Schneidige Flosse"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Using its dorsal fin as a suction pad, it clings to a Mantine's underside to scavenge for leftovers."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545186,
				tcgplayer: 234168
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545186,
				tcgplayer: 234168
			}
		},
	],
}

export default card
