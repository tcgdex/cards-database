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

	illustrator: "Mugi Hamada",
	rarity: "Common",
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
			type: "normal",
			thirdParty: {
				cardmarket: 835963,
				tcgplayer: 642143
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835963,
				tcgplayer: 642143
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836547,
				tcgplayer: 642386
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836548,
				tcgplayer: 642314
			}
		},
	],
}

export default card
