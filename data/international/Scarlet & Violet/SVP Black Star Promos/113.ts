import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [983],
	set: Set,

	name: {
		'en-us': "Kingambit",
		'fr-fr': "Scalpereur",
		'es-es': "Kingambit",
		'it-it': "Kingambit",
		'pt-br': "Kingambit",
		'de-de': "Gladimperio"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Elbow Strike",
			'fr-fr': "Coup de Coude",
			'es-es': "Codazo",
			'it-it': "Colpogomito",
			'pt-br': "Golpe de Cotovelo",
			'de-de': "Ellbogenstoß"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Slicing Blade",
			'fr-fr': "Lame Tranchante",
			'es-es': "Cuchilla Cortante",
			'it-it': "Affettalama",
			'pt-br': "Lâmina Fatiante",
			'de-de': "Schwertschneide"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "nagimiso",
	variants: [
		{
			type: "normal"
		}
	],
}

export default card
