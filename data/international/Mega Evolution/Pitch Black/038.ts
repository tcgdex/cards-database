import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Chandelure ex",
		fr: "Méga-Lugulabre-ex",
		es: "Mega-Chandelure ex",
		'es-mx': "Mega-Chandelure ex",
		de: "Mega-Skelabra-ex",
		it: "Mega Chandelure-ex",
		pt: "Mega Chandelure ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
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
			fr: "Flamme Entravante",
			es: "Atadura Ígnea",
			'es-mx': "Atadura Llameante",
			de: "Fesselnde Flamme",
			it: "Fiamma Vincolante",
			pt: "Lume Aprisionante"
		},

		effect: {
			en: "Your opponent's Active Pokémon's Retreat Cost is {C} more.",
			fr: "Le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de {C}.",
			es: "El Coste de Retirada del Pokémon Activo de tu rival es de {C} más.",
			'es-mx': "El Costo de Retirada del Pokémon Activo de tu rival es de {C} más.",
			de: "Die Rückzugskosten des Aktiven Pokémon deines Gegners erhöhen sich um {C}.",
			it: "Il costo di ritirata del Pokémon attivo del tuo avversario aumenta di {C}.",
			pt: "O Custo de Recuo do Pokémon Ativo do seu oponente é {C} a mais."
		}
	}],

	attacks: [{
		name: {
			en: "Phantom Maze",
			fr: "Labyrinthe Fantôme",
			es: "Laberinto Fantasmal",
			'es-mx': "Laberinto Fantasma",
			de: "Phantomlabyrinth",
			it: "Dedalo Spettrale",
			pt: "Labirinto Fantasma"
		},

		cost: ["Psychic", "Psychic"],

		damage: "130+",

		effect: {
			en: "This attack does 50 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada {C} en el Costo de Retirada del Pokémon Activo de tu rival.",
			de: "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 50 danni in più per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada {C} no Custo de Recuo do Pokémon Ativo do seu oponente."
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
				cardmarket: 895786,
				tcgplayer: 704795
			}
		},
	],
}

export default card
