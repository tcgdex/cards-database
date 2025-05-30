import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Kilowattrel",
		fr: "Fulgulairo",
		de: "Voltrean",
		it: "Kilowattrel",
		es: "Kilowattrel",
		pt: "Kilowattrel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Skill Dive",
			fr: "Plongeon Contrôlé",
			de: "Geübter Sturzflug",
			it: "Agiltuffo",
			es: "Técnica de Buceo",
			pt: "Mergulho Habilidoso"
		},

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque hace 50 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Thunder Blast",
			fr: "Grondement de Tonnerre",
			de: "Donnerkeil",
			it: "Tuonobomba",
			es: "Estallido Trueno",
			pt: "Explosão de Trovões"
		},

		effect: {
			en: "Discard a {L} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {L} de ce Pokémon.",
			de: "Lege 1 {L}-Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia {L} da questo Pokémon.",
			es: "Descarta 1 Energía {L} de este Pokémon.",
			pt: "Descarte uma Energia {L} deste Pokémon."
		},

		damage: 140
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card