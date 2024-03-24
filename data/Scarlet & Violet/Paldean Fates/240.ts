import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Wo-Chien ex",
		fr: "Chongjian-ex",
		es: "Wo-Chien ex",
		it: "Wo-Chien-ex"
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
			it: "Edera Bramosa"
		},

		effect: {
			en: "This attack does 60 damage to 1 of your opponent's Benched Pokémon for each Prize card your opponent has taken. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon de Banc de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 60 puntos de daño a uno de los Pokémon en Banca de tu rival por cada carta de Premio que haya cogido tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 60 danni a uno dei Pokémon nella panchina del tuo avversario per ogni carta Premio che ha preso. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			en: "Forest Blast",
			fr: "Explosion Sylvestre",
			es: "Explosión Forestal",
			it: "Esplosione Forestale"
		},

		damage: 220
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card