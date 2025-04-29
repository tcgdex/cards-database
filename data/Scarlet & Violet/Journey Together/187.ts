import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Salamence ex",
		fr: "Drattak-ex",
		es: "Salamence ex",
		de: "Brutalanda-ex",
		it: "Salamence-ex",
		pt: "Salamence ex",
		'es-mx': "Salamence ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Wide Blast",
			fr: "Large Explosion",
			es: "Estallido Expansivo",
			de: "Rundumexplosion",
			it: "Vastoscoppio",
			pt: "Explodir Geral",
			'es-mx': "Explosión Amplia"
		},

		effect: {
			en: "This attack does 50 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 50 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 50 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Este ataque hace 50 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}, {
		cost: ["Fire", "Water", "Colorless", "Colorless"],

		name: {
			en: "Dragon Impact",
			fr: "Impact du Dragon",
			es: "Impacto Dragón",
			de: "Dracheneinschlag",
			it: "Draghimpatto",
			pt: "Impacto do Dragão",
			'es-mx': "Impacto Dracónico"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon."
		},

		damage: 300
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
