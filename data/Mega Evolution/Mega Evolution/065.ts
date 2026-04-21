import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Greavard",
		fr: "Toutombe",
		de: "Gruff",
		it: "Greavard",
		es: "Greavard",
		pt: "Greavard",
		'es-mx': "Greavard"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [971],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			es: "Estampida",
			pt: "Estouro",
			'es-mx': "Estampida"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Take Down",
			fr: "Bélier",
			de: "Bodycheck",
			it: "Riduttore",
			es: "Derribo",
			pt: "Desmantelar",
			'es-mx': "Derribo"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo."
		},

		damage: 40
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654404,
		cardmarket: 851136
	}
}

export default card