import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [977],
	set: Set,

	name: {
		'en-us': "Dondozo ex",
		'fr-fr': "Oyacata-ex",
		'de-de': "Heerashai-ex",
		'it-it': "Dondozo-ex",
		'es-es': "Dondozo ex",
		'pt-br': "Dondozo ex",
		'es-mx': "Dondozo ex"
	},


	suffix: "ex",
	illustrator: "N-DESIGN Inc.",

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Avenging Billow",
			'fr-fr': "Volutes Vengeresses",
			'de-de': "Racheschwaden",
			'it-it': "Ondata Vendicativa",
			'es-es': "Ola Vengativa",
			'pt-br': "Maremoto Vingativo",
			'es-mx': "Ola Vengadora"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'es-mx': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon."
		},

		damage: "30+"
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Dynamic Dive",
			'fr-fr': "Plongée Dynamique",
			'de-de': "Dynamischer Taucher",
			'it-it': "Tuffo Dinamico",
			'es-es': "Picado Dinámico",
			'pt-br': "Mergulho Dinâmico",
			'es-mx': "Buceo Dinámico"
		},

		effect: {
			'en-us': "You may do 120 more damage. If you do, this Pokémon also does 50 damage to itself.",
			'fr-fr': "Vous pouvez infliger 120 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige aussi 50 dégâts.",
			'de-de': "Du kannst 120 Schadenspunkte mehr zufügen. Wenn du das machst, fügt dieses Pokémon auch sich selbst 50 Schadenspunkte zu.",
			'it-it': "Puoi infliggere 120 danni in più. Se lo fai, questo Pokémon infligge anche 50 danni a se stesso.",
			'es-es': "Puedes hacer 120 puntos de daño más. Si lo haces, este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'pt-br': "Você pode causar 120 pontos de dano a mais. Se fizer isto, este Pokémon também causará 50 pontos de dano a si mesmo.",
			'es-mx': "Puedes hacer 120 puntos de daño más. Si lo haces, este Pokémon también se hace 50 puntos de daño a sí mismo."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825940,
				tcgplayer: 632879
			}
		},
	],
}

export default card
