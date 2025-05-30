import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		de: "Hippoterus",
		it: "Hippowdon",
		es: "Hippowdon",
		pt: "Hippowdon",
		'es-mx': "Hippowdon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme",
			it: "Carica",
			es: "Apisonar",
			pt: "Aríete",
			'es-mx': "Colisión"
		},

		damage: 60
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Super Sandstorm",
			fr: "Super Tempête de Sable",
			de: "Super-Sandsturm",
			it: "Super Terrempesta",
			es: "Supertormenta de Arena",
			pt: "Supertempestade de Areia",
			'es-mx': "Supertormenta de Arena"
		},

		effect: {
			en: "This attack also does 40 damage to each Benched Pokémon that has any damage counters on it (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 40 dégâts à chacun des Pokémon de Banc ayant au moins un marqueur de dégâts (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank (deiner und der deines Gegners), auf dem mindestens 1 Schadensmarke liegt, 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 40 danni a ciascuno dei Pokémon in panchina che ha dei segnalini danno, sia tuo che del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque también hace 40 puntos de daño a cada Pokémon en Banca (tanto tuyos como de tu rival) que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 40 pontos de dano a cada um dos Pokémon no Banco que tiver algum contador de dano nele (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque también hace 40 puntos de daño a cada Pokémon en Banca que tenga algún contador de daño sobre él (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card