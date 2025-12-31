import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [537],
	set: Set,

	name: {
		en: "Seismitoad",
		fr: "Crapustule",
		de: "Branawarz",
		it: "Seismitoad",
		pt: "Seismitoad",
		es: "Seismitoad",
		'es-mx': "Seismitoad"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
		de: "Mebrana",
		it: "Palpitoad",
		pt: "Palpitoad",
		es: "Palpitoad",
		'es-mx': "Palpitoad"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Round",
			fr: "Chant Canon",
			de: "Kanon",
			it: "Coro",
			pt: "Circular",
			es: "Canon",
			'es-mx': "Canon"
		},

		effect: {
			en: "This attack does 70 damage for each of your Pokémon in play that has the Round attack.",
			fr: "Cette attaque inflige 70 dégâts pour chacun de vos Pokémon en jeu ayant l'attaque Chant Canon.",
			de: "Diese Attacke fügt für jedes deiner Pokémon im Spiel, das die Attacke Kanon hat, 70 Schadenspunkte zu.",
			it: "Questo attacco infligge 70 danni per ogni tuo Pokémon in gioco che ha l'attacco Coro.",
			pt: "Este ataque causa 70 pontos de dano para cada um dos seus Pokémon em jogo que tiver o ataque Circular.",
			es: "Este ataque hace 70 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon.",
			'es-mx': "Este ataque hace 70 puntos de daño por cada uno de tus Pokémon en juego que tenga el ataque Canon."
		},

		damage: "70×"
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hyper Voice",
			fr: "Mégaphone",
			de: "Schallwelle",
			it: "Granvoce",
			pt: "Hipervoz",
			es: "Vozarrón",
			'es-mx': "Hipervoz"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835943
	}
}

export default card