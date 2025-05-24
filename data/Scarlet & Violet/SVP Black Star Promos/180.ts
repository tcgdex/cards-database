import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Dialga ex",
		fr: "Dialga-ex",
		de: "Dialga-ex",
		es: "Dialga ex",
		it: "Dialga-ex",
		pt: "Dialga ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Time Bellow",
			fr: "Appel Temporel",
			de: "Zeitschrei",
			es: "Bramido Tiempo",
			it: "Ruggito Temporale",
			pt: "Bramido Temporal"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Metal Blast",
			fr: "Explosion Métallique",
			de: "Metallexplosion",
			es: "Explosión Metálica",
			it: "Metalbomba",
			pt: "Explosão de Metal"
		},

		effect: {
			en: "This attack does 20 more damage for each {M} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {M} attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {M}-Energie 20 Schadenspunkte mehr zu.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía {M} unida a este Pokémon.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia {M} assegnata a questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia {M} ligada a este Pokémon."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card