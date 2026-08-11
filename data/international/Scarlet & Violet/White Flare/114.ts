import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [522],
	set: Set,

	name: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'de-de': "Elezeba",
		'it-it': "Blitzle",
		'pt-br': "Blitzle",
		'es-es': "Blitzle",
		'es-mx': "Blitzle"
	},

	illustrator: "Natsumi Miyanose",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'de-de': "Schmetterkick",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'es-es': "Patada Destrucción",
			'es-mx': "Patada Devastadora"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Zap Kick",
			'fr-fr': "Coup de Pied Ravageur",
			'de-de': "Stromtritt",
			'it-it': "Dinamocalcio",
			'pt-br': "Chute Zap",
			'es-es': "Electropatada",
			'es-mx': "Electropatada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836122,
			tcgplayer: 642226
		}
	},
],
}

export default card
