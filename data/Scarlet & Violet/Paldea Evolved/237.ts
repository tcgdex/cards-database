import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [939],
	set: Set,

	name: {
		fr: "Ampibidou-ex",
		en: "Bellibolt ex",
		es: "Bellibolt ex",
		it: "Bellibolt-ex",
		pt: "Bellibolt ex",
		de: "Wampitz-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Pression Sauteuse",
			en: "Jumping Press",
			es: "Presión Salto",
			it: "Saltopressa",
			pt: "Compressão Saltitante",
			de: "Erdrückender Sprung"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque hace 50 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Boule Paralysante",
			en: "Paralyzing Ball",
			es: "Bola Paralizante",
			it: "Palla Paralizzante",
			pt: "Bola Paralisante",
			de: "Paralysierender Ball"
		},

		effect: {
			fr: "Vous pouvez défausser 2 Énergies {L} de ce Pokémon pour laisser le Pokémon Actif de votre adversaire Paralysé.",
			en: "You may discard 2 {L} Energy from this Pokémon to make your opponent's Active Pokémon Paralyzed.",
			es: "Puedes descartar 2 Energías {L} de este Pokémon para dejar al Pokémon Activo de tu rival Paralizado.",
			it: "Puoi scartare due Energie {L} da questo Pokémon per lasciare il Pokémon attivo del tuo avversario paralizzato.",
			pt: "Você pode descartar 2 Energias {L} deste Pokémon para deixar o Pokémon Ativo do seu oponente Paralisado.",
			de: "Du kannst 2 {L}-Energien von diesem Pokémon auf deinen Ablagestapel legen, um das Aktive Pokémon deines Gegners zu paralysieren."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "PLANETA Yamashita"
}

export default card