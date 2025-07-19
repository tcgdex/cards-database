import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		de: "Tentantel",
		it: "Ferrothorn",
		pt: "Ferrothorn",
		es: "Ferrothorn",
		'es-mx': "Ferrothorn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Power Whip",
			fr: "Mégafouet",
			de: "Blattgeißel",
			it: "Vigorcolpo",
			pt: "Chicote Poderoso",
			es: "Latigazo",
			'es-mx': "Latigazo"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon for each Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede an dieses Pokémon angelegte Energie 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia ligada a este Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			es: "Este ataque hace 20 puntos de daño a uno de los Pokémon de tu rival por cada Energía unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival por cada Energía unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			de: "Metallklaue",
			it: "Ferrartigli",
			pt: "Garra de Metal",
			es: "Garra Metal",
			'es-mx': "Garra de Metal"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card