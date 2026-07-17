import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Chandelure ex",
		fr: "Méga-Lugulabre-ex",
		es: "Mega-Chandelure ex",
		'es-mx': "Mega-Chandelure ex",
		de: "Mega-Skelabra-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [609],
	hp: 350,
	types: ["Psychic"],

	evolveFrom: {
		en: "Lampent"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Binding Flame",
			es: "Atadura Ígnea",
			'es-mx': "Atadura Llameante",
			de: "Fesselnde Flamme"
		},

		effect: {
			en: "Your opponent's Pokémon's Retreat Cost is 1 more",
			es: "El de Retirada del Pokémon Activo de tu rival es de {C} más.",
			'es-mx': "El de Retirada del Pokémon Activo de tu rival es de {C} más.",
			de: "Die Rückzugskosten des Aktiven Pokémon deines Gegners erhöhen sich um {C}."
		}
	}],

	attacks: [{
		name: {
			en: "Phantom Maze",
			es: "Laberinto Fantasmal",
			'es-mx': "Laberinto Fantasma",
			de: "Phantomlabyrinth"
		},

		cost: ["Psychic", "Psychic"],

		damage: "130+",

		effect: {
			en: "This attack does 50 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost.",
			es: "Este ataque hace 50 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			de: "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte mehr zu."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895884,
				tcgplayer: 704856
			}
		},
	],
}

export default card
