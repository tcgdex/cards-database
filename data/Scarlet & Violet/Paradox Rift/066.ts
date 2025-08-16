import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [644],
	set: Set,

	name: {
		en: "Zekrom",
		fr: "Zekrom",
		es: "Zekrom",
		it: "Zekrom",
		pt: "Zekrom",
		de: "Zekrom"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Crushing Short",
			fr: "Court-Circuit Écrasant",
			es: "Cortocircuito Demoledor",
			it: "Spaccacircuito",
			pt: "Curto Esmagador",
			de: "Vernichtender Kurzschluss"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Raging Thunder",
			fr: "Tonnerre Déchaîné",
			es: "Trueno Rabioso",
			it: "Rombotuono",
			pt: "Trovão Devastador",
			de: "Tosender Donner"
		},

		effect: {
			en: "This attack also does 40 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 40 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 40 puntos de daño a uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 40 danni a uno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 40 pontos de dano a 1 dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Shiburingaru",

	thirdParty: {
		cardmarket: 740557
	}
}

export default card