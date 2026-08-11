import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [921],
	set: Set,

	name: {
		'en-us': "Pawmi",
		'fr-fr': "Pohm",
		'es-es': "Pawmi",
		'it-it': "Pawmi",
		'de-de': "Pamo",
		'pt-br': "Pawmi"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'es-es': "Puño Ligero",
			'it-it': "Pugnetto",
			'de-de': "Leichter Hieb",
			'pt-br': "Soco de Luz"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Zap Kick",
			'fr-fr': "Coup de Pied Ravageur",
			'es-es': "Electropatada",
			'it-it': "Dinamocalcio",
			'de-de': "Stromtritt",
			'pt-br': "Chute Zap"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751773,
				tcgplayer: 534739,
				cardtrader: 274410
			}
		},
	],

	illustrator: "REND",

	description: {
		'en-us': "The pads of its paws are electricity-discharging organs. Pawmi fires electricity from its forepaws while standing unsteadily on its hind legs.",
	},

}

export default card
