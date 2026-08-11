import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [403],
	set: Set,

	name: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Jolt",
			'fr-fr': "Secousse Tonnerre",
			'es-es': "Sacudida Atronadora",
			'it-it': "Scoppiotuono",
			'pt-br': "Choque do Trovão",
			'de-de': "Donnerrüttler"
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
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon generates electricity by contracting its muscles. Excited trembling is a sign that Shinx is generating a tremendous amount of electricity.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691757,
				tcgplayer: 478144
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691757,
				tcgplayer: 478144
			}
		},
	],
}

export default card
