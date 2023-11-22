import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Elekid",
		fr: "Élekid",
		es: "Elekid",
		it: "Elekid",
		pt: "Elekid",
		de: "Elekid"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Crackling Shot",
			fr: "Tir Crépitant",
			es: "Disparo Chispeante",
			it: "Colpo Crepitante",
			pt: "Disparo Estalante",
			de: "Knisternder Schuss"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card