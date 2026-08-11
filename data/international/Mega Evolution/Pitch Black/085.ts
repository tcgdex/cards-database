import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fomantis",
		'fr-fr': "Mimantis",
		'es-es': "Fomantis",
		'es-mx': "Fomantis",
		'de-de': "Imantis",
		'it-it': "Fomantis",
		'pt-br': "Fomantis"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [753],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'es-mx': "Carga Temeraria",
			'de-de': "Waghalsiger Sturmangriff",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável"
		},

		cost: ["Grass"],

		damage: 30,

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895869,
				tcgplayer: 704842
			}
		},
	],
}

export default card
