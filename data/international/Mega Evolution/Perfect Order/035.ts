import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [682],

	name: {
		'en-us': "Spritzee",
		'fr-fr': "Fluvetin",
		'es-es': "Spritzee",
		'es-mx': "Spritzee",
		'de-de': "Parfi",
		'it-it': "Spritzee",
		'pt-br': "Spritzee"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sweet Scent",
			'fr-fr': "Doux Parfum",
			'es-es': "Dulce Aroma",
			'es-mx': "Dulce Aroma",
			'de-de': "Lockduft",
			'it-it': "Profumino",
			'pt-br': "Aroma Doce"
		},

		effect: {
			'en-us': "Heal 30 damage from 1 of your Pokémon.",
			'fr-fr': "Soignez 30 dégâts de l'un de vos Pokémon.",
			'es-es': "Cura 30 puntos de daño a uno de tus Pokémon.",
			'es-mx': "Cura 30 puntos de daño a 1 de tus Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
			'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de 1 dos seus Pokémon."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'es-mx': "Colisión",
			'de-de': "Ramme",
			'it-it': "Carica",
			'pt-br': "Aríete"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684420,
				cardmarket: 877449
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684420,
				cardmarket: 877449
			}
		}
	],

}

export default card
