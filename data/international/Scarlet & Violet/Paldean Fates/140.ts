import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [848],
	set: Set,

	name: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Slight Intrusion",
			'fr-fr': "Légère Intrusion",
			'es-es': "Ligera Intromisión",
			'it-it': "Coinvolgimento",
			'pt-br': "Leve Invasão",
			'de-de': "Vorwagen"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
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
			type: 'holo',
			thirdParty: {
				cardmarket: 751679,
				tcgplayer: 534574,
				cardtrader: 274323
			}
		},
	],

	illustrator: "Lee HyunJung",

	description: {
		'en-us': "It has no problem drinking dirty water. An organ inside Toxel's body filters such water into a poisonous liquid that is harmless to Toxel.",
	},

}

export default card
