import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [852],
	set: Set,

	name: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Slight Intrusion",
			'fr-fr': "Légère Intrusion",
			'es-es': "Ligera Intromisión",
			'it-it': "Coinvolgimento",
			'pt-br': "Leve Invasão",
			'de-de': "Vorwagen"
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
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794445,
				tcgplayer: 589903
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794445,
				tcgplayer: 589903
			}
		},
	],

	illustrator: "Shimaris Yukichi",

}

export default card
