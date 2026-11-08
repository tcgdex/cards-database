import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [917],
	set: Set,

	name: {
		'en-us': "Team Rocket's Tarountula",
		'fr-fr': "Tissenboule de la Team Rocket",
		'de-de': "Team Rockets Tarundel",
		'it-it': "Tarountula del Team Rocket",
		'es-es': "Tarountula del Team Rocket",
		'pt-br': "Tarountula da Equipe Rocket",
		'es-mx': "Tarountula del Equipo Rocket"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'de-de': "Bodycheck",
			'it-it': "Riduttore",
			'es-es': "Derribo",
			'pt-br': "Desmantelar",
			'es-mx': "Derribo"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825893,
				tcgplayer: 632845
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825893,
				tcgplayer: 632845
			}
		},
	],
}

export default card
