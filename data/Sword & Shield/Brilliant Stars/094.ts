import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Grimmsnarl",
		fr: "Angoliath",
		es: "Grimmsnarl",
		it: "Grimmsnarl",
		pt: "Grimmsnarl",
		de: "Olangaar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Morgrem",
		fr: "Fourbelin",
		es: "Morgrem",
		it: "Morgrem",
		pt: "Morgrem",
		de: "Pelzebub"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Longhair Shot",
			fr: "Tir Chevelu",
			es: "Disparo Melenudo",
			it: "Colpo Capellone",
			pt: "Disparo Cabeludo",
			de: "Langhaarschuss"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon for each Darkness Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie Darkness attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival por cada Energía Darkness unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia Darkness assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia Darkness ligada a este Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Darkness-Energie 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			pt: "Presa Sombria",
			de: "Fänge der Dunkelheit"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card