import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "This Pokémon's stomach is so strong, even eating moldy or rotten food will not affect it."
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'de-de': "Schwerer Einschlag",
			'es-es': "Impacto Pesado",
			'pt-br': "Impacto Pesado",
			'it-it': "Impatto Pesante"
		},

		damage: 80
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582903,
				tcgplayer: 253301
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582903,
				tcgplayer: 253301
			}
		},
	],
}

export default card
