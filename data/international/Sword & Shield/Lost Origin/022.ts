import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [219],
	set: Set,

	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'es-es': "Magcargo",
		'it-it': "Magcargo",
		'pt-br': "Magcargo",
		'de-de': "Magcargo"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma",
		'es-es': "Slugma",
		'it-it': "Slugma",
		'pt-br': "Slugma",
		'de-de': "Schneckmag"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'de-de': "Flackern"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Lost Volcano",
			'fr-fr': "Volcan Perdu",
			'es-es': "Volcán Perdido",
			'it-it': "Vulcano Perduto",
			'pt-br': "Vulcão Perdido",
			'de-de': "Nirgendwo-Vulkan"
		},

		effect: {
			'en-us': "Put all Energy attached to this Pokémon in the Lost Zone.",
			'fr-fr': "Placez toutes les Énergies attachées à ce Pokémon dans la Zone Perdue.",
			'es-es': "Pon todas las Energías unidas a este Pokémon en la Zona Perdida.",
			'it-it': "Prendi tutte le Energie assegnate a questo Pokémon e mettile nell'area perduta.",
			'pt-br': "Coloque todas as Energias ligadas a este Pokémon na Zona Perdida.",
			'de-de': "Lege alle an dieses Pokémon angelegten Energien ins Nirgendwo."
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674033,
				tcgplayer: 283893
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674033,
				tcgplayer: 283893
			}
		},
	],
}

export default card
