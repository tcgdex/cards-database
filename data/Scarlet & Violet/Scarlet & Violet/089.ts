import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Drifloon",
		fr: "Baudrive",
		es: "Drifloon",
		it: "Drifloon",
		pt: "Drifloon",
		de: "Driftlon"
	},

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
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Balloon Blast",
			fr: "Explosion Ballon",
			es: "Explosión Globo",
			it: "Pallonesplosione",
			pt: "Explosão de Balão",
			de: "Ballonexplosion"
		},

		effect: {
			en: "This attack does 30 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card