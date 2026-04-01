import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Espurr",
		fr: "Psystigri",
		es: "Espurr",
		'es-mx': "Espurr",
		de: "Psiau",
		it: "Espurr",
		pt: "Espurr"
	},

	illustrator: "Terada Tera",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Nap",
			fr: "Tit'Sieste",
			es: "Siesta",
			'es-mx': "Siesta",
			de: "Nickerchen",
			it: "Pausa",
			pt: "Soneca"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			'es-mx': "Cura 20 puntos de daño a este Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			'es-mx': "Estampida",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			pt: "Estouro"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "J"
}

export default card