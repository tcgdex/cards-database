import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Gigalith",
		fr: "Gigalithe",
		de: "Brockoloss",
		it: "Gigalith",
		pt: "Gigalith",
		es: "Gigalith",
		'es-mx': "Gigalith"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Vengeful Cannon",
			fr: "Canon Vengeur",
			de: "Rachekanone",
			it: "Cannone Vendicativo",
			pt: "Canhão Vingativo",
			es: "Cañón Vengativo",
			'es-mx': "Cañón Vengativo"
		},

		effect: {
			en: "This attack does 20 damage for each damage counter on all of your Benched {F} Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur tous vos Pokémon {F} de Banc.",
			de: "Diese Attacke fügt für jede Schadensmarke auf allen {F}-Pokémon auf deiner Bank 20 Schadenspunkte zu.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente sui tuoi Pokémon {F} in panchina.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano em todos os seus Pokémon {F} no Banco.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en cada uno de tus Pokémon {F} en Banca.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en cada uno de tus Pokémon {F} en Banca."
		},

		damage: "20×"
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			de: "Schwerer Einschlag",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			es: "Impacto Pesado",
			'es-mx': "Impacto Pesado"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card