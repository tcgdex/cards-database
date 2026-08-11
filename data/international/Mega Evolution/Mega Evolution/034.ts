import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kyogre",
		'fr-fr': "Kyogre",
		'de-de': "Kyogre",
		'it-it': "Kyogre",
		'es-es': "Kyogre",
		'pt-br': "Kyogre",
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
			'en-us': "Riptide",
			'fr-fr': "Courant",
			'de-de': "Springflut",
			'it-it': "Corrente Impetuosa",
			'es-es': "Aguas Revueltas",
			'pt-br': "Rebentação",
			'es-mx': "Corriente Destructiva"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Basic {W} Energy card in your discard pile. Then, shuffle those cards into your deck.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte Énergie {W} de base dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
			'de-de': "Diese Attacke fügt für jede Basis-{W}-Energiekarte in deinem Ablagestapel 20 Schadenspunkte zu. Mische jene Karten anschließend in dein Deck.",
			'it-it': "Questo attacco infligge 20 danni per ogni carta Energia base {W} nella tua pila degli scarti. Poi rimischia quelle carte nel tuo mazzo.",
			'es-es': "Este ataque hace 20 puntos de daño por cada carta de Energía {W} Básica en tu pila de descartes. Después, pon esas cartas en tu baraja y barájalas todas.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada carta de Energia {W} Básica na sua pilha de descarte. Em seguida, embaralhe aquelas cartas no seu baralho.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada carta de Energía {W} Básica en tu pila de descartes. Después, baraja esas cartas en tu mazo."
		},

		damage: "20×"
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Swirling Waves",
			'fr-fr': "Vagues Tourbillonnantes",
			'de-de': "Wellenwirbel",
			'it-it': "Turbine d'Onde",
			'es-es': "Remolino de Olas",
			'pt-br': "Turbilhão de Ondas",
			'es-mx': "Remolino de Olas"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851105,
				tcgplayer: 654373
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851105,
				tcgplayer: 654373
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 867789,
			}
		},
	],
}

export default card
