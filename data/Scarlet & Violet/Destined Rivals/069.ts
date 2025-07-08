import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Electivire ex",
		fr: "Élekable-ex",
		de: "Elevoltek-ex",
		it: "Electivire-ex",
		es: "Electivire ex",
		pt: "Electivire ex",
		'es-mx': "Electivire ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Dual Bolt",
			fr: "Double Éclair",
			de: "Dualblitz",
			it: "Doppio Lampo",
			es: "Rayo Dual",
			pt: "Raio Duplo",
			'es-mx': "Rayo Dual"
		},

		effect: {
			en: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "High-Voltage Press",
			fr: "Pression Haute-Tension",
			de: "Starkstromdruck",
			it: "Pressa Folgorante",
			es: "Presión Alto Voltaje",
			pt: "Compressão de Alta Voltagem",
			'es-mx': "Prensa de Alto Voltaje"
		},

		effect: {
			en: "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 100 more damage.",
			fr: "Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 2 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha almeno due Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 100 danni in più.",
			es: "Si este Pokémon tiene por lo menos 2 Energías adicionales unidas (además de las del coste de este ataque), este ataque hace 100 puntos de daño más.",
			pt: "Se este Pokémon tiver pelo menos 2 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque causará 100 pontos de dano a mais.",
			'es-mx': "Si este Pokémon tiene al menos 2 Energías adicionales unidas (además de las del costo de este ataque), este ataque hace 100 puntos de daño más."
		},

		damage: "180+"
	}],

	retreat: 4,
	regulationMark: "I",

	variants_detailed: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card
