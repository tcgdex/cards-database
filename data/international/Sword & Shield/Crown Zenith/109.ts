import { Card } from "models/database/card"
import Set from "../Crown Zenith"

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

	illustrator: "Asako Ito",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'es-es': "Impacto Pesado",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'de-de': "Schwerer Einschlag"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",


	description: {
		'en-us': "This Pokémon's stomach is so strong, even eating moldy or rotten food will not affect it.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691828,
				tcgplayer: 478136
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691828,
				tcgplayer: 478136
			}
		},
	],
}

export default card
