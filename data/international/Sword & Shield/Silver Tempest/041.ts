import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [361],
	set: Set,

	name: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre 1 carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Icy Snow",
			'fr-fr': "Verglas",
			'es-es': "Nieve Helada",
			'it-it': "Geloneve",
			'pt-br': "Neve Congelada",
			'de-de': "Eisiger Schnee"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It's said that if they are seen at midnight, they'll cause heavy snow. They eat snow and ice to survive.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682086,
				tcgplayer: 451677
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682086,
				tcgplayer: 451677
			}
		},
	],
}

export default card
