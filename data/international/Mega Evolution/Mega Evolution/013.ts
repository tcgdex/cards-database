import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'de-de': "Samurzel",
		'it-it': "Seedot",
		'es-es': "Seedot",
		'pt-br': "Seedot",
		'es-mx': "Seedot"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	dexId: [273],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Nap",
			'fr-fr': "Tit'Sieste",
			'de-de': "Nickerchen",
			'it-it': "Pausa",
			'es-es': "Siesta",
			'pt-br': "Soneca",
			'es-mx': "Siesta"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'es-mx': "Cura 20 puntos de daño a este Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'de-de': "Samenbomben",
			'it-it': "Semebomba",
			'es-es': "Bomba Germen",
			'pt-br': "Bomba de Sementes",
			'es-mx': "Bomba Semilla"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851084,
				tcgplayer: 654352
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851084,
				tcgplayer: 654352
			}
		},
	],
}

export default card
