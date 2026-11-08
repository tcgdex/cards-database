import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		'en-us': "Excadrill",
		'fr-fr': "Minotaupe",
		'es-es': "Excadrill",
		'it-it': "Excadrill",
		'pt-br': "Excadrill",
		'de-de': "Stalobor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Mud Shot",
			'fr-fr': "Tir de Boue",
			'es-es': "Disparo Lodo",
			'it-it': "Colpodifango",
			'pt-br': "Tiro de Lama",
			'de-de': "Lehmschuss"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Wild Tackle",
			'fr-fr': "Tacle Brutal",
			'es-es': "Placaje Salvaje",
			'it-it': "Azionferoce",
			'pt-br': "Investida Feroz",
			'de-de': "Wilder Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It's not uncommon for tunnels that appear to have formed naturally to actually be a result of Excadrill's rampant digging.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760716,
				tcgplayer: 542830
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760716,
				tcgplayer: 542830
			}
		},
	],

	illustrator: "Bun Toujo",

}

export default card