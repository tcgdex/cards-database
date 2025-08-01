import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Rillaboom VMAX",
		fr: "Gorythmic VMAX",
		es: "Rillaboom VMAX",
		it: "Rillaboom VMAX",
		pt: "Rillaboom VMAX",
		de: "Gortrom VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		en: "Rillaboom V",
		fr: "Gorythmic-V",
		es: "Rillaboom V",
		it: "Rillaboom-V",
		pt: "Rillaboom V",
		de: "Gortrom-V"
	},

	stage: "VMAX",
	retreat: 3,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "G-Max Drum Solo",
			fr: "Percussion G-Max",
			de: "Giga-Getrommel",
			es: "Gigarredoble",
			pt: "Solo de Tambores G-Max",
			it: "Gigarullio"
		},

		damage: 180,

		effect: {
			en: "This attack also does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 40 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 40 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 40 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 40 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582085
	}
}

export default card
