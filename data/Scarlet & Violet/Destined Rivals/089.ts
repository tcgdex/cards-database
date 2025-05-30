import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Drifloon",
		fr: "Baudrive",
		de: "Driftlon",
		it: "Drifloon",
		es: "Drifloon",
		pt: "Drifloon"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			de: "Windstoß",
			it: "Raffica",
			es: "Tornado",
			pt: "Lufada de Vento"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Balloon Blast",
			fr: "Explosion Ballon",
			de: "Ballonexplosion",
			it: "Pallonesplosione",
			es: "Explosión Globo",
			pt: "Explosão de Balão"
		},

		effect: {
			en: "This attack does 30 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card