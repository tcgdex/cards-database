import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [171],
	set: Set,

	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'es-es': "Lanturn",
		'it-it': "Lanturn",
		'pt-br': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Strong Volt",
			'fr-fr': "Décharge Foudroyante",
			'es-es': "Descarga Fulminante",
			'it-it': "Supervolt",
			'pt-br': "Tensão Intensa",
			'de-de': "Voltkraft"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "The light it emits is so bright that it can illuminate the sea's surface from a depth of over three miles.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682099,
				tcgplayer: 451707
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682099,
				tcgplayer: 451707
			}
		},
	],
}

export default card
