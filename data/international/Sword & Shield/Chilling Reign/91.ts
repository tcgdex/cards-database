import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [852],
	set: Set,

	name: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Its tentacles tear off easily, but it isn't alarmed when that happens—it knows they'll grow back. It's about as smart as a three-year-old."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567199,
				tcgplayer: 241760
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567199,
				tcgplayer: 241760
			}
		},
	],
}

export default card
