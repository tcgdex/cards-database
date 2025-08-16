import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [381],
	set: Set,

	name: {
		en: "Latios",
		fr: "Latios",
		es: "Latios",
		it: "Latios",
		pt: "Latios",
		de: "Latios"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Skill Dive",
			fr: "Plongeon Contrôlé",
			es: "Técnica de Buceo",
			it: "Agiltuffo",
			pt: "Mergulho Habilidoso",
			de: "Geübter Sturzflug"
		},

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Jet Headbutt",
			fr: "Bélier Volant",
			es: "Turbocabezazo",
			it: "Zuccata Jet",
			pt: "Cabeçada a Jato",
			de: "Flinke Kopfnuss"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "kantaro"
}

export default card
