import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [723],
	set: Set,

	name: {
		fr: "Efflèche",
		en: "Dartrix",
		es: "Dartrix",
		it: "Dartrix",
		pt: "Dartrix",
		de: "Arboretoss"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Passer à Travers",
			en: "Shoot Through",
			es: "Cruzar Rápido",
			it: "Sparainmezzo",
			pt: "Tiro Vazante",
			de: "Durchschießen"
		},

		effect: {
			fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Rowlet",
		fr: "Brindibou",
		es: "Rowlet",
		it: "Rowlet",
		pt: "Rowlet",
		de: "Bauz"
	}
}

export default card