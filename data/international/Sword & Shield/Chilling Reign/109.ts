import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [304],
	set: Set,

	name: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'es-es': "Aron",
		'it-it': "Aron",
		'pt-br': "Aron",
		'de-de': "Stollunior"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 50,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "When it evolves, it sheds the steel carapace that covered its whole body and develops a new one."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567217,
				tcgplayer: 241784
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567217,
				tcgplayer: 241784
			}
		},
	],
}

export default card
