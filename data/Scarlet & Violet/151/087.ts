import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [87],
	set: Set,

	name: {
		fr: "Lamantine",
		en: "Dewgong",
		es: "Dewgong",
		it: "Dewgong",
		pt: "Dewgong",
		de: "Jugong"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			fr: "Double Splash",
			en: "Dual Splash",
			es: "Doble Salpicadura",
			it: "Doppiosplash",
			pt: "Esguicho Duplo",
			de: "Doppelplatscher"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Onde Boréale",
			en: "Aurora Beam",
			es: "Rayo Aurora",
			it: "Raggiaurora",
			pt: "Raio Aurora",
			de: "Aurorastrahl"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card