import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [932],
	set: Set,

	name: {
		'en-us': "Nacli",
		'fr-fr': "Selutin",
		'es-es': "Nacli",
		'it-it': "Nacli",
		'pt-br': "Nacli",
		'de-de': "Geosali"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Salt Coating",
			'fr-fr': "Couche de Sel",
			'es-es': "Recubrimiento Salino",
			'it-it': "Copertura di Sale",
			'pt-br': "Camada de Sal",
			'de-de': "Salzbeschichtung"
		},

		effect: {
			'en-us': "Heal 20 damage from 1 of your Pokémon.",
			'fr-fr': "Soignez 20 dégâts de l'un de vos Pokémon.",
			'es-es': "Cura 20 puntos de daño a uno de tus Pokémon.",
			'it-it': "Cura uno dei tuoi Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano de 1 dos seus Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei 1 deiner Pokémon."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751715,
				tcgplayer: 534762,
				cardtrader: 274361
			}
		},
	],

	illustrator: "Yuu Nishida",

	description: {
		'en-us': "It was born in a layer of rock salt deep under the earth. This species was particularly treasured in the old days, as they would share precious salt.",
	},

}

export default card
