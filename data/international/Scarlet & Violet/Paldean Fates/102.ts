import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [928],
	set: Set,

	name: {
		'en-us': "Smoliv",
		'fr-fr': "Olivini",
		'es-es': "Smoliv",
		'it-it': "Smoliv",
		'pt-br': "Smoliv",
		'de-de': "Olini"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Nutrients",
			'fr-fr': "Nutriments",
			'es-es': "Nutrientes",
			'it-it': "Nutrienti",
			'pt-br': "Nutrientes",
			'de-de': "Nährstoffe"
		},

		effect: {
			'en-us': "Heal 30 damage from 1 of your Pokémon.",
			'fr-fr': "Soignez 30 dégâts de l'un de vos Pokémon.",
			'es-es': "Cura 30 puntos de daño a uno de tus Pokémon.",
			'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de 1 dos seus Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Spray Fluid",
			'fr-fr': "Fluide Éclaboussant",
			'es-es': "Fluido Rociado",
			'it-it': "Fluidospray",
			'pt-br': "Fluido Spray",
			'de-de': "Sprühwasser"
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
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751641,
				tcgplayer: 534473,
				cardtrader: 274286
			}
		},
	],

	illustrator: "otumami",

	description: {
		'en-us': "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",
	},

}

export default card
