import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [379],
	set: Set,

	name: {
		'en-us': "Registeel",
		'fr-fr': "Registeel",
		'es-es': "Registeel",
		'it-it': "Registeel",
		'pt-br': "Registeel",
		'de-de': "Registeel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Raging Hammer",
			'fr-fr': "Marteau Rageur",
			'es-es': "Martillo Furioso",
			'it-it': "Martelfuria",
			'pt-br': "Martelo Feroz",
			'de-de': "Wuthammer"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "60+"
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
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794498,
				tcgplayer: 590034
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794498,
				tcgplayer: 590034
			}
		},
	],

	illustrator: "Shiburingaru",

}

export default card
