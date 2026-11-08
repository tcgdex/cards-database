import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		'fr-fr': "Axoloto de Paldea",
		'en-us': "Paldean Wooper",
		'es-es': "Wooper de Paldea",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea",
		'de-de': "Paldea-Felino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Ruée",
			'en-us': "Stampede",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Coup de Pied de Garnement",
			'en-us': "Playful Kick",
			'es-es': "Patada Juguetona",
			'it-it': "Calcio Briccone",
			'pt-br': "Chute Brincalhão",
			'de-de': "Verspielter Kick"
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
			type: 'normal',
			thirdParty: {
				cardmarket: 715604,
				tcgplayer: 497586,
				cardtrader: 248778
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715604,
				tcgplayer: 497586,
				cardtrader: 248778
			}
		},
	],

	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
	},
}

export default card
