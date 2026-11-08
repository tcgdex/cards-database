import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [211],
	set: Set,

	name: {
		'en-us': "Qwilfish",
		'fr-fr': "Qwilfish",
		'es-es': "Qwilfish",
		'it-it': "Qwilfish",
		'pt-br': "Qwilfish",
		'de-de': "Baldorfish"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		'en-us': "The small spikes covering its body developed from scales. They inject a toxin that causes fainting."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'de-de': "Sammeln",
			'es-es': "Coleccionar",
			'pt-br': "Coleta",
			'it-it': "Tassa"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre 1 carta.",
			'it-it': "Pesca una carta."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Spike Sting",
			'fr-fr': "Pic Piquant",
			'de-de': "Stachelstich",
			'es-es': "Picotazo Púas",
			'pt-br': "Ferroada de Espinhos",
			'it-it': "Aculeopuntura"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582194,
				tcgplayer: 253192
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582194,
				tcgplayer: 253192
			}
		},
	],
}

export default card
