import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Eiscue",
		fr: "Bekaglaçon",
		es: "Eiscue",
		it: "Eiscue",
		pt: "Eiscue",
		de: "Kubuin"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Block Slider",
			fr: "Pousse Cube",
			es: "Bloque Deslizante",
			it: "Blocco Scivoloso",
			pt: "Bloco Deslizante",
			de: "Blockgleiter"
		},

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon for each Fusion Strike Energy attached to all of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie Poing de Fusion attachée à tous vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival por cada Energía Golpe Fusión unida a todos tus Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario per ogni Energia Colpo Fusione assegnata ai tuoi Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia Golpe Fusão ligada a todos os seus Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede an alle deine Pokémon angelegte Fusionsangriff-Energie 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Icicle Missile",
			fr: "Missile Stalactite",
			es: "Misil Carámbano",
			it: "Missilghiaccio",
			pt: "Míssil Gélido",
			de: "Eiszapfenrakete"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "E",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card