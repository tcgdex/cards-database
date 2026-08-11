import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [787],
	set: Set,

	name: {
		'en-us': "Tapu Bulu",
		'fr-fr': "Tokotoro",
		'es-es': "Tapu Bulu",
		'it-it': "Tapu Bulu",
		'pt-br': "Tapu Bulu",
		'de-de': "Kapu-Toro"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Wood Hammer",
			'fr-fr': "Martobois",
			'es-es': "Mazazo",
			'it-it': "Mazzuolegno",
			'pt-br': "Martelo de Madeira",
			'de-de': "Holzhammer"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",


	illustrator: "IKEDA Saki",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780960,
				tcgplayer: 560376
			}
		},
	],
}

export default card
