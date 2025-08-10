import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [941],
	set: Set,

	name: {
		en: "Kilowattrel",
		fr: "Fulgulairo",
		es: "Kilowattrel",
		it: "Kilowattrel",
		pt: "Kilowattrel",
		de: "Voltrean"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Wattrel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

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
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Thunder Blast",
			fr: "Grondement de Tonnerre",
			es: "Estallido Trueno",
			it: "Tuonobomba",
			pt: "Explosão de Trovões",
			de: "Donnerkeil"
		},

		effect: {
			en: "Discard a {L} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {L} de ce Pokémon.",
			es: "Descarta 1 Energía {L} de este Pokémon.",
			it: "Scarta un'Energia {L} da questo Pokémon.",
			pt: "Descarte uma Energia {L} deste Pokémon.",
			de: "Lege 1 {L}-Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 140
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kouki Saitou"
}

export default card