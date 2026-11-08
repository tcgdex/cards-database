import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'es-es': "Centiskorch",
		'it-it': "Centiskorch",
		'pt-br': "Centiskorch",
		'de-de': "Infernopod"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'es-es': "Sizzlipede",
		'it-it': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'de-de': "Thermopod"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		'en-us': "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Steady Firebreathing",
			'fr-fr': "Crachage de Feu Régulier",
			'de-de': "Stetiger Feuerhauch",
			'es-es': "Lanzallamas Continuo",
			'pt-br': "Hálito de Fogo Constante",
			'it-it': "Soffiofuoco Mirato"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur",
			'de-de': "Hitzestoß",
			'es-es': "Explosión de Calor",
			'pt-br': "Raio de Calor",
			'it-it': "Caldobomba"
		},

		damage: 100
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582183,
				tcgplayer: 253180
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582183,
				tcgplayer: 253180
			}
		},
	],
}

export default card
