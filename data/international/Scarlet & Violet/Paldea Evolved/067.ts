import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [101],
	set: Set,

	name: {
		'fr-fr': "Électrode",
		'en-us': "Electrode",
		'es-es': "Electrode",
		'it-it': "Electrode",
		'pt-br': "Electrode",
		'de-de': "Lektrobal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Voltorbe",
		'en-us': "Voltorb",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},
	stage: "Stage1",

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

		damage: 60
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Roulé-Boulé",
			'en-us': "Rolling Tackle",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 90
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
				cardmarket: 715542,
				tcgplayer: 497478,
				cardtrader: 248684
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715542,
				tcgplayer: 497478,
				cardtrader: 248684
			}
		},
	],

	illustrator: "Scav",

	description: {
		'en-us': "The more energy it charges up, the faster it gets. But this also makes it more likely to explode.",
	},
}

export default card
