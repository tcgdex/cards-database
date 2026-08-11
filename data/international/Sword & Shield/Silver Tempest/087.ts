import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [885],
	set: Set,

	name: {
		'en-us': "Dreepy",
		'fr-fr': "Fantyrm",
		'es-es': "Dreepy",
		'it-it': "Dreepy",
		'pt-br': "Dreepy",
		'de-de': "Grolldra"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável",
			'de-de': "Waghalsiger Sturmangriff"
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
			type: "Darkness",
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
	regulationMark: "F",


	description: {
		'en-us': "After being reborn as a ghost Pokémon, Dreepy wanders the areas it used to inhabit back when it was alive in prehistoric seas.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682134,
				tcgplayer: 451741
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682134,
				tcgplayer: 451741
			}
		},
	],
}

export default card
