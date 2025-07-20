import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Throh",
		fr: "Judokrak",
		de: "Jiutesto",
		it: "Throh",
		pt: "Throh",
		es: "Throh",
		'es-mx': "Throh"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Shoulder Throw",
			fr: "Projection Martiale",
			de: "Schulterwurf",
			it: "Lanciodorso",
			pt: "Arremesso de Ombro",
			es: "Llave de Hombro",
			'es-mx': "Proyección de Hombro"
		},

		effect: {
			en: "This attack does 30 less damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts de moins pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte weniger zu.",
			it: "Questo attacco infligge 30 danni in meno per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a menos para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			es: "Este ataque hace 30 puntos de daño menos por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño menos por cada {C} en el Costo de Retirada del Pokémon Activo de tu rival."
		},

		damage: "120-"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card