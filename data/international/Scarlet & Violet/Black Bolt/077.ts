import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [627],
	set: Set,

	name: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'de-de': "Geronimatz",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'es-es': "Rufflet",
		'es-mx': "Rufflet"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'de-de': "Pikser",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'es-es': "Picotazo",
			'es-mx': "Picotazo"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement",
			'de-de': "Gleiten",
			'it-it': "Aliante",
			'pt-br': "Planeio",
			'es-es': "Planeo",
			'es-mx': "Planeo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836064,
				tcgplayer: 642191
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836064,
				tcgplayer: 642191
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836467,
				tcgplayer: 642431
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836466,
				tcgplayer: 642359
			}
		}
	]
}

export default card
