import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Lugulabre",
		en: "Chandelure",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Chaîne de Combustion",
			en: "Combustion Chain",
			es: "Cadena de Combustión",
			it: "Catena di Combustione",
			pt: "Corrente de Combustão",
			de: "Kettenbrand"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			fr: "Explosion de Chaleur",
			en: "Heat Blast",
			es: "Explosión de Calor",
			it: "Caldobomba",
			pt: "Raio de Calor",
			de: "Hitzestoß"
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card