import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [327],
	set: Set,

	name: {
		en: "Spinda",
		fr: "Spinda",
		es: "Spinda",
		it: "Spinda",
		pt: "Spinda",
		de: "Pandir"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dizzying Spin",
			fr: "Virevolte Vertigineuse",
			es: "Giro Mareante",
			it: "Stordigiro",
			pt: "Giro Vertiginoso",
			de: "Schwindelerregender Wirbel"
		},

		effect: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. Your opponent's Active Pokémon is now Confused. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. Le Pokémon Actif de votre adversaire est maintenant Confus. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. El Pokémon Activo de tu rival pasa a estar Confundido. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Il Pokémon attivo del tuo avversario viene confuso. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente. O Pokémon Ativo do seu oponente agora está Confuso (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. Das Aktive Pokémon deines Gegners ist jetzt verwirrt. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card