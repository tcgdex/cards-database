import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [20],
	set: Set,

	name: {
		'en-us': "Team Rocket's Raticate",
		'fr-fr': "Rattatac de la Team Rocket",
		'de-de': "Team Rockets Rattikarl",
		'it-it': "Raticate del Team Rocket",
		'es-es': "Raticate del Team Rocket",
		'pt-br': "Raticate da Equipe Rocket",
		'es-mx': "Raticate del Equipo Rocket"
	},


	illustrator: "Uninori",

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Team Rocket's Rattata",
		'fr-fr': "Rattata de la Team Rocket",
		'de-de': "Team Rockets Rattfratz",
		'it-it': "Rattata del Team Rocket",
		'es-es': "Rattata del Team Rocket",
		'pt-br': "Rattata da Equipe Rocket",
		'es-mx': "Rattata del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Reckless Abandon",
			'fr-fr': "Abandon Désinvolte",
			'de-de': "Absolute Hingabe",
			'it-it': "Impeto Avventato",
			'es-es': "Abandono Temerario",
			'pt-br': "Abandono Imprudente",
			'es-mx': "Abandono Temerario"
		},

		effect: {
			'en-us': "Flip 2 coins. If both of them are tails, this Pokémon also does 90 damage to itself.",
			'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés pile, ce Pokémon s'inflige aussi 90 dégâts.",
			'de-de': "Wirf 2 Münzen. Zeigen beide Münzen Zahl, fügt dieses Pokémon auch sich selbst 90 Schadenspunkte zu.",
			'it-it': "Lancia due volte una moneta. Se esce entrambe le volte croce, questo Pokémon infligge anche 90 danni a se stesso.",
			'es-es': "Lanza 2 monedas. Si sale cruz en ambas, este Pokémon también se hace 90 puntos de daño a sí mismo.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem coroa, este Pokémon também causará 90 pontos de dano a si mesmo.",
			'es-mx': "Lanza 2 monedas. Si sale cruz en ambas, este Pokémon también se hace 90 puntos de daño a sí mismo."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826022,
				tcgplayer: 632954
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826022,
				tcgplayer: 632954
			}
		},
	],
}

export default card
