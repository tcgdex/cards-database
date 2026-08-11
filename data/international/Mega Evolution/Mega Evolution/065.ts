import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Greavard",
		'fr-fr': "Toutombe",
		'de-de': "Gruff",
		'it-it': "Greavard",
		'es-es': "Greavard",
		'pt-br': "Greavard",
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
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'de-de': "Zertrampeln",
			'it-it': "Fuggi Fuggi",
			'es-es': "Estampida",
			'pt-br': "Estouro",
			'es-mx': "Estampida"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

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

		damage: 40
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851136,
				tcgplayer: 654404
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851136,
				tcgplayer: 654404
			}
		},
	],
}

export default card
