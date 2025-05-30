import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Treads ex",
		fr: "Roue-de-Fer-ex",
		de: "Eisenrad-ex",
		it: "Solcoferreo-ex",
		es: "Ferrodada ex",
		pt: "Trilho Férreo ex"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Triple Laser",
			fr: "Triple Laser",
			de: "Dreifachlaser",
			it: "Triplolaser",
			es: "Láser Triple",
			pt: "Laser Triplo"
		},

		effect: {
			en: "This attack does 30 damage to 3 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à 3 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 3 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 30 danni a tre dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			es: "Este ataque hace 30 puntos de daño a 3 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 30 pontos de dano a 3 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Cybernetic Wheels",
			fr: "Roues Cybernétiques",
			de: "Kybernetische Räder",
			it: "Ruote Cibernetiche",
			es: "Ruedas Cibernéticas",
			pt: "Rodas Cibernéticas"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card