import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Chandelure ex",
		'fr-fr': "Méga-Lugulabre-ex",
		'es-es': "Mega-Chandelure ex",
		'es-mx': "Mega-Chandelure ex",
		'de-de': "Mega-Skelabra-ex",
		'it-it': "Mega Chandelure-ex",
		'pt-br': "Mega Chandelure ex"
	},

	illustrator: "REND",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [609],
	hp: 350,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Lampent"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Binding Flame",
			'fr-fr': "Flamme Entravante",
			'es-es': "Atadura Ígnea",
			'es-mx': "Atadura Llameante",
			'de-de': "Fesselnde Flamme",
			'it-it': "Fiamma Vincolante",
			'pt-br': "Lume Aprisionante"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon's Retreat Cost is {C} more.",
			'fr-fr': "Le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de {C}.",
			'es-es': "El Coste de Retirada del Pokémon Activo de tu rival es de {C} más.",
			'es-mx': "El Costo de Retirada del Pokémon Activo de tu rival es de {C} más.",
			'de-de': "Die Rückzugskosten des Aktiven Pokémon deines Gegners erhöhen sich um {C}.",
			'it-it': "Il costo di ritirata del Pokémon attivo del tuo avversario aumenta di {C}.",
			'pt-br': "O Custo de Recuo do Pokémon Ativo do seu oponente é {C} a mais."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Phantom Maze",
			'fr-fr': "Labyrinthe Fantôme",
			'es-es': "Laberinto Fantasmal",
			'es-mx': "Laberinto Fantasma",
			'de-de': "Phantomlabyrinth",
			'it-it': "Dedalo Spettrale",
			'pt-br': "Labirinto Fantasma"
		},

		cost: ["Psychic", "Psychic"],

		damage: "130+",

		effect: {
			'en-us': "This attack does 50 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada {C} en el Costo de Retirada del Pokémon Activo de tu rival.",
			'de-de': "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada {C} no Custo de Recuo do Pokémon Ativo do seu oponente."
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
				cardmarket: 895900,
				tcgplayer: 704872
			}
		},
	],
}

export default card
