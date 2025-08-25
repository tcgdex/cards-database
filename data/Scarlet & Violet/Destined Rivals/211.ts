import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [977],
	set: Set,

	name: {
		en: "Dondozo ex",
		fr: "Oyacata-ex",
		de: "Heerashai-ex",
		it: "Dondozo-ex",
		es: "Dondozo ex",
		pt: "Dondozo ex",
		'es-mx': "Dondozo ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Avenging Billow",
			fr: "Volutes Vengeresses",
			de: "Racheschwaden",
			it: "Ondata Vendicativa",
			es: "Ola Vengativa",
			pt: "Maremoto Vingativo",
			'es-mx': "Ola Vengadora"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'es-mx': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon."
		},

		damage: "30+"
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			en: "Dynamic Dive",
			fr: "Plongée Dynamique",
			de: "Dynamischer Taucher",
			it: "Tuffo Dinamico",
			es: "Picado Dinámico",
			pt: "Mergulho Dinâmico",
			'es-mx': "Buceo Dinámico"
		},

		effect: {
			en: "You may do 120 more damage. If you do, this Pokémon also does 50 damage to itself.",
			fr: "Vous pouvez infliger 120 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige aussi 50 dégâts.",
			de: "Du kannst 120 Schadenspunkte mehr zufügen. Wenn du das machst, fügt dieses Pokémon auch sich selbst 50 Schadenspunkte zu.",
			it: "Puoi infliggere 120 danni in più. Se lo fai, questo Pokémon infligge anche 50 danni a se stesso.",
			es: "Puedes hacer 120 puntos de daño más. Si lo haces, este Pokémon también se hace 50 puntos de daño a sí mismo.",
			pt: "Você pode causar 120 pontos de dano a mais. Se fizer isto, este Pokémon também causará 50 pontos de dano a si mesmo.",
			'es-mx': "Puedes hacer 120 puntos de daño más. Si lo haces, este Pokémon también se hace 50 puntos de daño a sí mismo."
		},

		damage: "120+"
	}],

	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: 'holo'
		},
	]
}

export default card
