import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [618],
	set: Set,

	name: {
		'en-us': "Galarian Stunfisk",
		'fr-fr': "Limonde de Galar",
		'es-es': "Stunfisk de Galar",
		'de-de': "Galar-Flunschlik",
		'it-it': "Stunfisk di Galar",
		'pt-br': "Stunfisk de Galar",
		'es-mx': "Stunfisk de Galar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'de-de': "Lehmschelle",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'es-mx': "Bofetón Lodo"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Bounding Bite",
			'fr-fr': "Morsure Bondissante",
			'es-es': "Salto y Mordisco",
			'de-de': "Sprungbiss",
			'it-it': "Balzamorso",
			'pt-br': "Mordida Saltitante",
			'es-mx': "Mordida Asaltante"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Aya Kusube",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817258,
				tcgplayer: 623533
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817258,
				tcgplayer: 623533
			}
		},
	],
}

export default card
