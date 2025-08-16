import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [921],
	set: Set,

	name: {
		fr: "Pohmarmotte-ex",
		en: "Pawmot ex",
		es: "Pawmot ex",
		it: "Pawmot-ex",
		pt: "Pawmot ex",
		de: "Pamomamo-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Coup de Pied Ravageur",
			en: "Zap Kick",
			es: "Electropatada",
			it: "Dinamocalcio",
			pt: "Chute Zap",
			de: "Stromtritt"
		},

		damage: 60
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			fr: "Fulguration",
			en: "Levin Strike",
			es: "Disparo Relámpago",
			it: "Colposaetta",
			pt: "Golpe Relampejante",
			de: "Blitztreffer"
		},

		effect: {
			fr: "Défaussez 2 Énergies {L} de ce Pokémon. Cette attaque inflige 220 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "Discard 2 {L} Energy from this Pokémon. This attack does 220 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Descarta 2 Energías {L} de este Pokémon. Este ataque hace 220 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta due Energie {L} da questo Pokémon. Questo attacco infligge 220 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte 2 Energias {L} deste Pokémon. Este ataque causa 220 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Lege 2 {L}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 220 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "aky CG Works",

	thirdParty: {
		cardmarket: 725153
	}
}

export default card