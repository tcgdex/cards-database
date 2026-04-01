import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Spritzee",
		fr: "Fluvetin",
		es: "Spritzee",
		'es-mx': "Spritzee",
		de: "Parfi",
		it: "Spritzee",
		pt: "Spritzee"
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
			en: "Sweet Scent",
			fr: "Doux Parfum",
			es: "Dulce Aroma",
			'es-mx': "Dulce Aroma",
			de: "Lockduft",
			it: "Profumino",
			pt: "Aroma Doce"
		},

		effect: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
			es: "Cura 30 puntos de daño a uno de tus Pokémon.",
			'es-mx': "Cura 30 puntos de daño a 1 de tus Pokémon.",
			de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
			it: "Cura uno dei tuoi Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano de 1 dos seus Pokémon."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			'es-mx': "Colisión",
			de: "Ramme",
			it: "Carica",
			pt: "Aríete"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "J"
}

export default card