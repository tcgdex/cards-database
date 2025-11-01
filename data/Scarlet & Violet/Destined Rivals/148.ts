import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [20],
	set: Set,

	name: {
		en: "Team Rocket's Raticate",
		fr: "Rattatac de la Team Rocket",
		de: "Team Rockets Rattikarl",
		it: "Raticate del Team Rocket",
		es: "Raticate del Team Rocket",
		pt: "Raticate da Equipe Rocket",
		'es-mx': "Raticate del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Reckless Abandon",
			fr: "Abandon Désinvolte",
			de: "Absolute Hingabe",
			it: "Impeto Avventato",
			es: "Abandono Temerario",
			pt: "Abandono Imprudente",
			'es-mx': "Abandono Temerario"
		},

		effect: {
			en: "Flip 2 coins. If both of them are tails, this Pokémon also does 90 damage to itself.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, ce Pokémon s'inflige aussi 90 dégâts.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Zahl, fügt dieses Pokémon auch sich selbst 90 Schadenspunkte zu.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte croce, questo Pokémon infligge anche 90 danni a se stesso.",
			es: "Lanza 2 monedas. Si sale cruz en ambas, este Pokémon también se hace 90 puntos de daño a sí mismo.",
			pt: "Jogue 2 moedas. Se as duas saírem coroa, este Pokémon também causará 90 pontos de dano a si mesmo.",
			'es-mx': "Lanza 2 monedas. Si sale cruz en ambas, este Pokémon también se hace 90 puntos de daño a sí mismo."
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 826022
	}
}

export default card
