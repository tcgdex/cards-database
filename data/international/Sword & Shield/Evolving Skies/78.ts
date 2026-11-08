import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Cutiefly",
		'fr-fr': "Bombydou",
		'es-es': "Cutiefly",
		'it-it': "Cutiefly",
		'pt-br': "Cutiefly",
		'de-de': "Wommel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Yukiko Baba",

	attacks: [{
		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Flap",
			'de-de': "Flattern"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,

	description: {
		'en-us': "An opponent's aura can tell Cutiefly what that opponent's next move will be. Then Cutiefly can glide around the attack and strike back."
	},

	dexId: [742],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574126,
				tcgplayer: 246862
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574126,
				tcgplayer: 246862
			}
		},
	],
}

export default card
