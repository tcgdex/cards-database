import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [210],
	set: Set,

	name: {
		'en-us': "Granbull V",
		'fr-fr': "Granbull V",
		'es-es': "Granbull V",
		'it-it': "Granbull V",
		'pt-br': "Granbull V",
		'de-de': "Granbull V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Chomp",
			'fr-fr': "Mâche",
			'es-es': "Masticar",
			'it-it': "Biascicamento",
			'pt-br': "Nhoc",
			'de-de': "Mampf"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Bull Dash",
			'fr-fr': "Ruée Frontale",
			'es-es': "Choque Bravo",
			'it-it': "Corsa Bull",
			'pt-br': "Arremetida Violenta",
			'de-de': "Bullspurt"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608705,
				tcgplayer: 263878
			}
		},
	],
}

export default card
