import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Raging Bolt",
		fr: "Ire-Foudre",
		es: "Electrofuria",
		it: "Furiatonante",
		pt: "Raio Fúria",
		de: "Furienblitz"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Fighting"],

		name: {
			en: "Thunderburst Storm",
			fr: "Tempête Foudroyante",
			es: "Tormenta Atronadora",
			it: "Tempesta di Tuoni",
			pt: "Tempestade Trovejante",
			de: "Gewittersturm"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon for each Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival por cada Energía unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia ligada a este Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede an dieses Pokémon angelegte Energie 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Fighting", "Colorless"],

		name: {
			en: "Dragon Headbutt",
			fr: "Dracoud'Boule",
			es: "Cabezazo Dragón",
			it: "Dragozuccata",
			pt: "Cabeçada do Dragão",
			de: "Drachen-Kopfnuss"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	}
}

export default card
