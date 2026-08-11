import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [848],
	set: Set,

	name: {
		'fr-fr': "Toxizap",
		'en-us': "Toxel",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Légère Intrusion",
			'en-us': "Slight Intrusion",
			'es-es': "Ligera Intromisión",
			'it-it': "Coinvolgimento",
			'pt-br': "Leve Invasão",
			'de-de': "Vorwagen"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'en-us': "This Pokémon also does 10 damage to itself.",
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

	description: {
		'en-us': "It has no problem drinking dirty water. An organ inside Toxel's body filters such water into a poisonous liquid that is harmless to Toxel.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725151,
				tcgplayer: 509841,
				cardtrader: 255631
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725151,
				tcgplayer: 509841,
				cardtrader: 255631
			}
		},
	],

	illustrator: "AKIRA EGAWA",

	
}

export default card
