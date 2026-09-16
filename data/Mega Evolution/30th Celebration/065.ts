import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Mew",
		fr: "Mew",
		de: "Mew",
		es: "Mew",
		it: "Mew",
		'es-mx': "Mew"
	},

	illustrator: "danciao",
	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Psychic",
			fr: "Psyko",
			de: "Psychokinese",
			es: "Psíquico",
			it: "Psichico",
			'es-mx': "Fuerza Psíquica"
		},

		effect: {
			en: "This attack does 40 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 40 Schadenspunkte mehr zu.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "10+",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card