import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Regieleki"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Electromagnetic Sonar",
			fr: "Sonar Électromagnétique",
			es: "Sonar Electromagnético",
			it: "Sonar Elettromagnetico",
			pt: "Sonar Eletromagnético",
			de: "Elektromagnetisches Sonar"
		},

		effect: {
			en: "Put a Trainer card from your discard pile into your hand.",
			fr: "Ajoutez à votre main une carte Dresseur de votre pile de défausse.",
			es: "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
			it: "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque 1 carta de Treinador da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Trainerkarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Targeted Bolt",
			fr: "Foudre Ciblée",
			es: "Rayo Focalizado",
			it: "Lampo Mirato",
			pt: "Raio na Mira",
			de: "Gezielter Blitz"
		},

		effect: {
			en: "Discard 2 Lightning Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies Lightning de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta 2 Energías Lightning de este Pokémon. Este ataque hace 120 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta due Energie Lightning da questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte 2 Energias Lightning deste Pokémon. Este ataque causa 120 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Lege 2 Lightning-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card