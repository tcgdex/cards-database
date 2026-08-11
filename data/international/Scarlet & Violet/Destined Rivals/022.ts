import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [929],
	set: Set,

	name: {
		'en-us': "Dolliv",
		'fr-fr': "Olivado",
		'de-de': "Olivinio",
		'it-it': "Dolliv",
		'es-es': "Dolliv",
		'pt-br': "Dolliv",
		'es-mx': "Dolliv"
	},

	illustrator: "Felicia Chen",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Smoliv",
		'fr-fr': "Olivini",
		'de-de': "Olini",
		'it-it': "Smoliv",
		'es-es': "Smoliv",
		'pt-br': "Smoliv",
		'es-mx': "Smoliv"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Nutrients",
			'fr-fr': "Nutriments",
			'de-de': "Nährstoffe",
			'it-it': "Nutrienti",
			'es-es': "Nutrientes",
			'pt-br': "Nutrientes",
			'es-mx': "Nutrientes"
		},

		effect: {
			'en-us': "Heal 40 damage from 1 of your Pokémon.",
			'fr-fr': "Soignez 40 dégâts de l'un de vos Pokémon.",
			'de-de': "Heile 40 Schadenspunkte bei 1 deiner Pokémon.",
			'it-it': "Cura uno dei tuoi Pokémon da 40 danni.",
			'es-es': "Cura 40 puntos de daño a uno de tus Pokémon.",
			'pt-br': "Cure 40 pontos de dano de 1 dos seus Pokémon.",
			'es-mx': "Cura 40 puntos de daño a 1 de tus Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'it-it': "Azione",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'es-mx': "Tacleada"
		},

		damage: 40
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
				cardmarket: 825896,
				tcgplayer: 630806
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825896,
				tcgplayer: 630806
			}
		},
	],
}

export default card
