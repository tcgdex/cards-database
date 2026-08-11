import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [597],
	set: Set,

	name: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
		'de-de': "Kastadur",
		'it-it': "Ferroseed",
		'pt-br': "Ferroseed",
		'es-es': "Ferroseed",
		'es-mx': "Ferroseed"
	},

	illustrator: "Nurikabe",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Zzzt",
			'fr-fr': "Bzzz",
			'de-de': "Piiieks",
			'it-it': "Bzzz",
			'pt-br': "Bzzz",
			'es-es': "Bzzz",
			'es-mx': "Bzzz"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
			'de-de': "Metallklaue",
			'it-it': "Ferrartigli",
			'pt-br': "Garra de Metal",
			'es-es': "Garra Metal",
			'es-mx': "Garra de Metal"
		},

		damage: 40
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836180,
				tcgplayer: 642259
			}
		},
	],
}

export default card
