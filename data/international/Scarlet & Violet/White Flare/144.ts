import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [629],
	set: Set,

	name: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
		'de-de': "Skallyk",
		'it-it': "Vullaby",
		'pt-br': "Vullaby",
		'es-es': "Vullaby",
		'es-mx': "Vullaby"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Playful Kick",
			'fr-fr': "Coup de Pied de Garnement",
			'de-de': "Verspielter Kick",
			'it-it': "Calcio Briccone",
			'pt-br': "Chute Brincalhão",
			'es-es': "Patada Juguetona",
			'es-mx': "Patada Juguetona"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836173,
				tcgplayer: 642593
			}
		},
	],
}

export default card
