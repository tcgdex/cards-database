import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		en: "Zeraora",
		fr: "Zeraora",
		de: "Zeraora",
		it: "Zeraora",
		es: "Zeraora",
		pt: "Zeraora",
		'es-mx': "Zeraora"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			it: "Graffio",
			es: "Arañazo",
			pt: "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Thunder Raid",
			fr: "Raid Tonnerre",
			de: "Donnernder Angriff",
			it: "Raid Tonante",
			es: "Incursión Atronadora",
			pt: "Incursão de Trovão",
			'es-mx': "Redada Atronadora"
		},

		effect: {
			en: "Discard all Energy from this Pokémon, and this attack does 210 damage to 1 of your opponent's Benched Pokémon ex. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 210 dégâts à l'un des Pokémon-ex de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon-ex auf der Bank deines Gegners 210 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Scarta tutte le Energie da questo Pokémon e questo attacco infligge 210 danni a uno dei Pokémon-ex nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Descarta todas las Energías de este Pokémon, y este ataque hace 210 puntos de daño a uno de los Pokémon ex en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Descarte todas as Energias deste Pokémon, e este ataque causa 210 pontos de dano a 1 dos Pokémon ex no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Descarta todas las Energías de este Pokémon, y este ataque hace 210 puntos de daño a 1 de los Pokémon ex en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card
