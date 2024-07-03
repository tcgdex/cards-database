import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Garchomp ex",
		fr: "Carchacrok-ex",
		es: "Garchomp ex",
		it: "Garchomp-ex",
		pt: "Garchomp ex",
		de: "Knakrack-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Hydro Lander",
			fr: "Hydro-Atterrisseur",
			es: "Hidroaterrizaje",
			it: "Idrosbarco",
			pt: "Hidroaterrissagem",
			de: "Hydrolandung"
		},

		effect: {
			en: "Attach up to 3 Basic Fighting Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			fr: "Attachez jusqu'à 3 cartes Énergie Fighting de base de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			es: "Une hasta 3 cartas de Energía Fighting Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			it: "Assegna ai tuoi Pokémon in panchina fino a tre carte Energia base Fighting dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 3 cartas de Energia Fighting Básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			de: "Lege bis zu 3 Basis-Fighting-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		},

		damage: 160
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Sonic Dive",
			fr: "Plongée Sonique",
			es: "Zambullida Sónica",
			it: "Picchiata Sonica",
			pt: "Mergulho Sônico",
			de: "Überschalltaucher"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta 2 Energías de este Pokémon. Este ataque hace 120 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta due Energie da questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte 2 Energias deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card