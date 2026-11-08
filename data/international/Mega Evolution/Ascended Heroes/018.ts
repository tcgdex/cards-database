import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Tarountula",
		'fr-fr': "Tissenboule de la Team Rocket",
		'es-es': "Tarountula del Team Rocket",
		'es-mx': "Tarountula del Equipo Rocket",
		'de-de': "Team Rockets Tarundel",
		'it-it': "Tarountula del Team Rocket",
		'pt-br': "Tarountula da Equipe Rocket"
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
			'es-es': "Derribo",
			'es-mx': "Derribo",
			'de-de': "Bodycheck",
			'it-it': "Riduttore",
			'pt-br': "Desmantelar"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo."
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

	description: {
		'en-us': "The ball of threads wrapped around its body is elastic enough to deflect the scythes of Scyther, this Pokémon’s natural enemy.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869629,
			tcgplayer: 675830
		}
	},
	{
		type: "reverse",
		foil: "team-rocket",
		thirdParty: {
			cardmarket: 870165,
			tcgplayer: 676867
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 869629,
			tcgplayer: 677007
		}
	},
],
}

export default card
