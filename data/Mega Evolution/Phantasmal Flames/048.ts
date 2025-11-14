import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Paldean Tauros",
		fr: "Tauros de Paldea",
		es: "Tauros de Paldea",
		'es-mx': "Tauros de Paldea",
		de: "Paldea-Tauros",
		it: "Tauros di Paldea",
		pt: "Tauros de Paldea"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Raging Charge",
			fr: "Charge Enragée",
			es: "Carga Furiosa",
			'es-mx': "Carga Iracunda",
			de: "Wütender Ansturm",
			it: "Carica Furiosa",
			pt: "Estouro Enfezado"
		},

		effect: {
			en: "This attack does 40 damage for each of your Pokémon that has \"Tauros\" in its name that has any damage counters on it.",
			fr: "Cette attaque inflige 40 dégâts pour chacun de vos Pokémon ayant \" Tauros \" dans leur nom et ayant au moins un marqueur de dégâts.",
			es: "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon que tengan \"Tauros\" en su nombre y algún contador de daño sobre ellos.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon que tengan \"Tauros\" en su nombre y algún contador de daño sobre ellos.",
			de: "Diese Attacke fügt für jedes deiner Pokémon, bei dem \"Tauros\" zum Namen gehört und auf dem mindestens 1 Schadensmarke liegt, 40 Schadenspunkte zu.",
			it: "Questo attacco infligge 40 danni per ciascuno dei tuoi Pokémon che ha sia \"Tauros\" nel nome che dei segnalini danno.",
			pt: "Este ataque causa 40 pontos de dano para cada um dos seus Pokémon que tem \"Tauros\" em seu nome que tiver algum contador de dano nele."
		},

		damage: "40×"
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Double-Edge",
			fr: "Damoclès",
			es: "Doble Filo",
			'es-mx': "Doble Filo",
			de: "Risikotackle",
			it: "Sdoppiatore",
			pt: "Faca de Dois Gumes"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card