import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'es-es': "Carvanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha",
		'de-de': "Kanivanha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Kyoko Umemoto",

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Ram",
			'de-de': "Ramme"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Razor Fin",
			'fr-fr': "Aileron-Rasoir",
			'es-es': "Aleta Afilada",
			'it-it': "Pinnalama",
			'pt-br': "Razor Fin",
			'de-de': "Rasierflosse"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "With its sturdy jaws and fangs, it can easily chomp wooden boats to splinters. It fights with Basculin over food."
	},

	dexId: [318],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574059,
				tcgplayer: 246839
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574059,
				tcgplayer: 246839
			}
		},
	],
}

export default card
