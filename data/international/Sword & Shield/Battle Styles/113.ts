import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [108],
	set: Set,

	name: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue",
		'es-es': "Lickitung",
		'it-it': "Lickitung",
		'pt-br': "Lickitung",
		'de-de': "Schlurp"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Tongue Slap",
			'fr-fr': "Gros Coup de Langue",
			'es-es': "Bofetón Lengua",
			'it-it': "Linguasberla",
			'pt-br': "Tapa de Língua",
			'de-de': "Zungenschelle"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It licks filth clean with its tongue. Whatever it licks always stinks afterward, so whether it's really clean is…questionable."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545651,
				tcgplayer: 234153
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545651,
				tcgplayer: 234153
			}
		},
	],
}

export default card
