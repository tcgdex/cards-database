import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [818],
	set: Set,

	name: {
		en: "Inteleon V",
		fr: "Lézargus V",
		es: "Inteleon V",
		it: "Inteleon V",
		pt: "Inteleon V",
		de: "Intelleon V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Surf",
			fr: "Surf",
			de: "Surfer",
			es: "Surf",
			pt: "Surfar",
			it: "Surf"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Aqua Bullet",
			fr: "Aquaballe",
			de: "Aquageschoss",
			es: "Bala Agua",
			pt: "Projétil de Água",
			it: "Idrodardo"
		},

		damage: 120,

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582212
	}
}

export default card
