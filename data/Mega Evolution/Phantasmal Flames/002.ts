import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Gloom",
		fr: "Ortide",
		es: "Gloom",
		'es-mx': "Gloom",
		de: "Duflor",
		it: "Gloom",
		pt: "Gloom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",
	dexId: [44],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Disperse Drool",
			fr: "Bave Dispersée",
			es: "Salivazo Disperso",
			'es-mx': "Dispersaliva",
			de: "Sabberspeier",
			it: "Spargibava",
			pt: "Baba Espalhada"
		},

		effect: {
			en: "This attack also does 20 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 20 puntos de daño a cada Pokémon en Banca (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 20 puntos de daño a cada Pokémon en Banca (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank (deiner und der deines Gegners) 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 20 danni a ogni Pokémon in panchina, sia tuo che del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a cada Pokémon no Banco (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I", 

	thirdParty: {
		cardmarket: 857577
	}
}

export default card