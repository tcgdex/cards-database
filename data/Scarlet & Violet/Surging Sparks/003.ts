import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		es: "Exeggutor",
		it: "Exeggutor",
		pt: "Exeggutor",
		de: "Kokowei"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Barrage O'Clock",
			fr: "Heure de Pilonnage",
			es: "Las Bombardeo en Punto",
			it: "Ora dell'Offensiva",
			pt: "Rajada Cronometrada",
			de: "Stakkato-Zeit"
		},

		effect: {
			en: "Flip a coin for each Energy attached to both Active Pokémon. This attack does 60 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée aux deux Pokémon Actifs. Cette attaque inflige 60 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía unida a ambos Pokémon Activos. Este ataque hace 60 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia assegnata a ciascuno dei Pokémon attivi. Questo attacco infligge 60 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda para cada Energia ligada a ambos os Pokémon Ativos. Este ataque causa 60 pontos de dano para cada cara.",
			de: "Wirf 1 Münze für jede an beide Aktiven Pokémon angelegte Energie. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
		},

		damage: "60×"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Oswaldo KATO"
}

export default card
