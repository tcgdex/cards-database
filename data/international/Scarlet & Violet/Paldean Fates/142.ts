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
		'pt-br': "Pawmi",
		'de-de': "Pamo"
	},

	rarity: "Shiny rare",
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
			'pt-br': "Soco de Luz",
			'de-de': "Leichter Hieb"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Zap Kick",
			'fr-fr': "Coup de Pied Ravageur",
			'es-es': "Electropatada",
			'it-it': "Dinamocalcio",
			'pt-br': "Chute Zap",
			'de-de': "Stromtritt"
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
				cardmarket: 751681,
				tcgplayer: 534577,
				cardtrader: 274325
			}
		},
	],

	illustrator: "kurumitsu",

	description: {
		'en-us': "The pads of its paws are electricity-discharging organs. Pawmi fires electricity from its forepaws while standing unsteadily on its hind legs.",
	},

}

export default card
