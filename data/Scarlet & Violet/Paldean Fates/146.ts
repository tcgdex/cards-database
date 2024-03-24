import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Kilowattrel",
		fr: "Fulgulairo",
		es: "Kilowattrel",
		it: "Kilowattrel",
		pt: "Kilowattrel",
		de: "Voltrean"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "United Thunder",
			fr: "Tonnerre Uni",
			es: "Truenos Unidos",
			it: "Tuono Unito",
			pt: "União de Trovões",
			de: "Vereinter Donner"
		},

		effect: {
			en: "This attack does 10 damage for each Pokémon in your discard pile that has the United Wings attack to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de Banc de votre adversaire pour chaque Pokémon dans votre pile de défausse ayant l'attaque Ailes Unies. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 10 puntos de daño a uno de los Pokémon en Banca de tu rival por cada Pokémon en tu pila de descartes que tenga el ataque Alas Unidas. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 10 danni a uno dei Pokémon nella panchina del tuo avversario per ogni Pokémon nella tua pila degli scarti che ha l'attacco Ali Unite. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 10 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque União Alada a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte für jedes Pokémon in deinem Ablagestapel, das die Attacke Vereinte Schwingen hat, zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
			es: "Ala Veloz",
			it: "Alaveloce",
			pt: "Asa da Velocidade",
			de: "Turboschwinge"
		},

		damage: 90
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card