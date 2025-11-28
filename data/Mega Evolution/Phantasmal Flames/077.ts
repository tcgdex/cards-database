import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		'es-mx': "Wigglytuff",
		de: "Knuddeluff",
		it: "Wigglytuff",
		pt: "Wigglytuff"
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [40],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",
	dexId: [40],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Round",
			fr: "Chant Canon",
			es: "Canon",
			'es-mx': "Canon",
			de: "Kanon",
			it: "Coro",
			pt: "Circular"
		},

		effect: {
			en: "This attack does 40 damage for each of your Pokémon in play that has the Round attack.",
			fr: "Cette attaque inflige 40 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
			es: "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon en juego que tengan el ataque Canon.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon en juego que tengan el ataque Canon.",
			de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 40 Schadenspunkte zu.",
			it: "Questo attacco infligge 40 danni per ciascuno dei tuoi Pokémon in gioco che ha l'attacco Coro.",
			pt: "Este ataque causa 40 pontos de dano para cada um dos seus Pokémon em jogo que tiver o ataque Circular."
		},

		damage: "40×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas",
			es: "Sísmico",
			'es-mx': "Sísmico",
			de: "Geowurf",
			it: "Movimento Sismico",
			pt: "Arremesso Sísmico"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857652
	}
}

export default card