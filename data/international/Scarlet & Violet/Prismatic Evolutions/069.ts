import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [884],
	set: Set,

	name: {
		'en-us': "Duraludon",
		'fr-fr': "Duralugon",
		'es-es': "Duraludon",
		'pt-br': "Duraludon",
		'it-it': "Duraludon",
		'de-de': "Duraludon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'it-it': "Martello",
			'de-de': "Einhämmern"
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Raging Hammer",
			'fr-fr': "Marteau Rageur",
			'es-es': "Martillo Furioso",
			'pt-br': "Martelo Feroz",
			'it-it': "Martelfuria",
			'de-de': "Wuthammer"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Takeshi Nakamura",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805458,
				tcgplayer: 610424
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805458,
				tcgplayer: 610424
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806506,
				tcgplayer: 610586
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806507,
				tcgplayer: 610687
			}
		},
	],
}

export default card
