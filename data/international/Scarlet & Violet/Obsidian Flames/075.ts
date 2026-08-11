import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [938],
	set: Set,

	name: {
		'fr-fr': "Têtampoule",
		'en-us': "Tadbulb",
		'es-es': "Tadbulb",
		'it-it': "Tadbulb",
		'pt-br': "Tadbulb",
		'de-de': "Blipp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'fr-fr': "Secousse Tonnerre",
			'en-us': "Thunder Jolt",
			'es-es': "Sacudida Atronadora",
			'it-it': "Scoppiotuono",
			'pt-br': "Choque do Trovão",
			'de-de': "Donnerrüttler"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'en-us': "This Pokémon also does 10 damage to itself.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 40
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
		'en-us': "Tadbulb shakes its tail to generate electricity. If it senses danger, it will make its head blink on and off to alert its allies.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725155,
				tcgplayer: 509851,
				cardtrader: 255635
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725155,
				tcgplayer: 509851,
				cardtrader: 255635
			}
		},
	],

	illustrator: "Saya Tsuruta",

	
}

export default card
