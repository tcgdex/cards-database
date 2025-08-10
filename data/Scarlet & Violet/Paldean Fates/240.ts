import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [1001],
	set: Set,

	name: {
		en: "Wo-Chien ex",
		fr: "Chongjian-ex",
		es: "Wo-Chien ex",
		it: "Wo-Chien-ex",
		de: "Chongjian-ex",
		pt: "Wo-Chien ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Covetous Ivy",
			fr: "Liane Envieuse",
			es: "Hiedra Codiciosa",
			it: "Edera Bramosa",
			de: "Gieriger Efeu",
			pt: "Hera da Cobiça"
		},

		effect: {
			en: "This attack does 60 damage to 1 of your opponent's Benched Pokémon for each Prize card your opponent has taken. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon de Banc de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 60 puntos de daño a uno de los Pokémon en Banca de tu rival por cada carta de Premio que haya cogido tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon nella panchina del tuo avversario per ogni carta Premio che ha preso. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte für jede von deinem Gegner genommene Preiskarte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			pt: "Este ataque causa 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente para cada carta de Prêmio que ele pegou. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			en: "Forest Blast",
			fr: "Explosion Sylvestre",
			es: "Explosión Forestal",
			it: "Esplosione Forestale",
			de: "Waldexplosion",
			pt: "Explosão Florestal"
		},

		damage: 220
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics"
}

export default card