import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [445],
	set: Set,

	name: {
		'en-us': "Garchomp ex",
		'fr-fr': "Carchacrok-ex",
		'es-es': "Garchomp ex",
		'it-it': "Garchomp-ex",
		'pt-br': "Garchomp ex",
		'de-de': "Knakrack-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
		'es-es': "Gabite",
		'it-it': "Gabite",
		'pt-br': "Gabite",
		'de-de': "Knarksel"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Hydro Lander",
			'fr-fr': "Hydro-Atterrisseur",
			'es-es': "Hidroaterrizaje",
			'it-it': "Idrosbarco",
			'pt-br': "Hidroaterrissagem",
			'de-de': "Hydrolandung"
		},

		effect: {
			'en-us': "Attach up to 3 Basic {F} Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 3 cartes Énergie {F} de base de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			'es-es': "Une hasta 3 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon in panchina fino a tre carte Energia base {F} dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 3 cartas de Energia {F} Básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			'de-de': "Lege bis zu 3 Basis-{F}-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		},

		damage: 160
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Sonic Dive",
			'fr-fr': "Plongée Sonique",
			'es-es': "Zambullida Sónica",
			'it-it': "Picchiata Sonica",
			'pt-br': "Mergulho Sônico",
			'de-de': "Überschalltaucher"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta 2 Energías de este Pokémon. Este ataque hace 120 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Scarta due Energie da questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte 2 Energias deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740762,
				tcgplayer: 523900,
				cardtrader: 265377
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
