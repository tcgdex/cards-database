import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Hydreigon ex",
		fr: "Trioxhydre-ex",
		es: "Hydreigon ex",
		it: "Hydreigon-ex",
		pt: "Hydreigon ex",
		de: "Trikephalo-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Crashing Headbutt",
			fr: "Coup d'Boule Percutant",
			es: "Cabezazo Demoledor",
			it: "Bottintesta Schiacciante",
			pt: "Cabeçada Estrondosa",
			de: "Krachender Kopfstoß"
		},

		effect: {
			en: "Discard the top 3 cards of your opponent's deck.",
			fr: "Défaussez les 3 cartes du dessus du deck de votre adversaire.",
			es: "Descarta las 3 primeras cartas de la baraja de tu rival.",
			it: "Scarta le prime tre carte del mazzo del tuo avversario.",
			pt: "Descarte as 3 cartas de cima do baralho do seu oponente.",
			de: "Lege die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 200
	}, {
		cost: ["Psychic", "Darkness", "Metal", "Colorless"],

		name: {
			en: "Obsidian",
			fr: "Obsidienne",
			es: "Obsidiana",
			it: "Ossidiana",
			pt: "Obsidiana",
			de: "Obsidian"
		},

		effect: {
			en: "This attack also does 130 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 130 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 130 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 130 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 130 pontos de dano a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 130 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "AKIRA EGAWA"
}

export default card
