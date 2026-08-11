import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [100],
	set: Set,

	name: {
		'fr-fr': "Voltorbe",
		'en-us': "Voltorb",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Boule Éclair",
			'en-us': "Lightning Ball",
			'es-es': "Bola Relámpago",
			'it-it': "Fulminpalla",
			'pt-br': "Bola de Raios",
			'de-de': "Kugelblitz"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Roulade",
			'en-us': "Rollout",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'de-de': "Walzer"
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
				cardmarket: 715541,
				tcgplayer: 497477,
				cardtrader: 248681
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715541,
				tcgplayer: 497477,
				cardtrader: 248681
			}
		},
	],

	illustrator: "sui",

	description: {
		'en-us': "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
	},
}

export default card
