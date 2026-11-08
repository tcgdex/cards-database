import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [661],
	set: Set,

	name: {
		'fr-fr': "Passerouge",
		'en-us': "Fletchling",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Descente en Piqué",
			'en-us': "Nosedive",
			'es-es': "Ataque en Picado",
			'it-it': "Rapidiscesa",
			'pt-br': "Mergulhar de Bico",
			'de-de': "Sturzflugangriff"
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
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715638,
				tcgplayer: 497582,
				cardtrader: 248818
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715638,
				tcgplayer: 497582,
				cardtrader: 248818
			}
		},
	],

	illustrator: "sui",

	description: {
		'en-us': "This Pokémon is normally calm, but once it enters battle, its hormonal balance changes and it becomes aggressive.",
	},
}

export default card
