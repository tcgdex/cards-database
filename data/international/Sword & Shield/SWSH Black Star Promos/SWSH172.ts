import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [498],
	set: Set,

	name: {
		'fr-fr': "Gruikui",
		'de-de': "Floink",
		'es-es': "Tepig",
		'pt-br': "Tepig",
		'it-it': "Tepig",
		'en-us': "Tepig"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'es-es': "Apisonar",
			'pt-br': "Aríete",
			'it-it': "Carica",
			'en-us': "Ram"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Fournaise",
			'de-de': "Glühen",
			'es-es': "Combustión",
			'pt-br': "Combustão",
			'it-it': "Fuoco Continuo",
			'en-us': "Combustion"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",

	description: {
		'en-us': "It loves to eat roasted berries, but sometimes it gets too excited and burns them to a crisp."
	},

	thirdParty: {
		cardmarket: 583199
	}
}

export default card
