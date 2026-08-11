import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [513],
	set: Set,

	name: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
		'de-de': "Grillmak",
		'it-it': "Pansear",
		'pt-br': "Pansear",
		'es-es': "Pansear",
		'es-mx': "Pansear"
	},

	illustrator: "Julie Hang",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'es-es': "Coleccionar",
			'es-mx': "Recolectar"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'es-es': "Roba 1 carta.",
			'es-mx': "Roba 1 carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'es-es': "Arañazo",
			'es-mx': "Arañazo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835927,
				tcgplayer: 642129
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835927,
				tcgplayer: 642129
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836517,
				tcgplayer: 642374
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836518,
				tcgplayer: 642302
			}
		},
	],
}

export default card
