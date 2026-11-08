import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'de-de': "Flemmli",
		'it-it': "Torchic",
		'es-es': "Torchic",
		'pt-br': "Torchic",
		'es-mx': "Torchic"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	dexId: [255],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'de-de': "Pikser",
			'it-it': "Beccata",
			'es-es': "Picotazo",
			'pt-br': "Bicada",
			'es-mx': "Picotazo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 891880
			}
		},
	],
}

export default card
