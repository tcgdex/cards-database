import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Kyogre",
		fr: "Kyogre",
		de: "Kyogre",
		it: "Kyogre",
		es: "Kyogre",
		pt: "Kyogre",
		'es-mx': "Kyogre"
	},

	illustrator: "Nisota Niso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Basic",
	dexId: [382],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Riptide",
			fr: "Courant",
			de: "Springflut",
			it: "Corrente Impetuosa",
			es: "Aguas Revueltas",
			pt: "Rebentação",
			'es-mx': "Corriente Destructiva"
		},

		effect: {
			en: "This attack does 20 damage for each Basic {W} Energy card in your discard pile. Then, shuffle those cards into your deck.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte Énergie {W} de base dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
			de: "Diese Attacke fügt für jede Basis-{W}-Energiekarte in deinem Ablagestapel 20 Schadenspunkte zu. Mische jene Karten anschließend in dein Deck.",
			it: "Questo attacco infligge 20 danni per ogni carta Energia base {W} nella tua pila degli scarti. Poi rimischia quelle carte nel tuo mazzo.",
			es: "Este ataque hace 20 puntos de daño por cada carta de Energía {W} Básica en tu pila de descartes. Después, pon esas cartas en tu baraja y barájalas todas.",
			pt: "Este ataque causa 20 pontos de dano para cada carta de Energia {W} Básica na sua pilha de descarte. Em seguida, embaralhe aquelas cartas no seu baralho.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada carta de Energía {W} Básica en tu pila de descartes. Después, baraja esas cartas en tu mazo."
		},

		damage: "20×"
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Swirling Waves",
			fr: "Vagues Tourbillonnantes",
			de: "Wellenwirbel",
			it: "Turbine d'Onde",
			es: "Remolino de Olas",
			pt: "Turbilhão de Ondas",
			'es-mx': "Remolino de Olas"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654373
	}
}

export default card