import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [962],
	set: Set,

	name: {
		'en-us': "Bombirdier",
		'fr-fr': "Lestombaile",
		'es-es': "Bombirdier",
		'it-it': "Bombirdier",
		'pt-br': "Bombirdier",
		'de-de': "Adebom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável",
			'de-de': "Waghalsiger Sturmangriff"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785951,
				tcgplayer: 567323
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785951,
				tcgplayer: 567323
			}
		},
	],

	illustrator: "Aya Kusube",

}

export default card
