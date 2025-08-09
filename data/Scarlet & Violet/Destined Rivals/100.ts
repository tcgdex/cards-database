import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [308],
	set: Set,

	name: {
		en: "Medicham",
		fr: "Charmina",
		de: "Meditalis",
		it: "Medicham",
		es: "Medicham",
		pt: "Medicham",
		'es-mx': "Medicham"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Harmonious Spirit Palm",
			fr: "Paume Esprit Harmonieux",
			de: "Harmonische Mentalhand",
			it: "Palmospirito Armonioso",
			es: "Palma del Espíritu Armonioso",
			pt: "Palma do Espírito Harmonioso",
			'es-mx': "Palma del Espíritu Armonioso"
		},

		effect: {
			en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached, this attack does 120 more damage.",
			fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont autant d'Énergies attachées, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon genauso viel Energie angelegt ist wie an das Aktive Pokémon deines Gegners, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 120 danni in più.",
			es: "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas, este ataque hace 120 puntos de daño más.",
			pt: "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas, este ataque hace 120 puntos de daño más."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card