import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Valiant",
		fr: "Garde-de-Fer",
		es: "Ferropaladín",
		it: "Eroeferreo",
		pt: "Valentia Férrea",
		de: "Eisenkrieger"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gemini Laser",
			fr: "Laser Gémeaux",
			es: "Láser Géminis",
			it: "Laser Gemini",
			pt: "Laser Gêmeo",
			de: "Gemini-Laser"
		},

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Zen Blade",
			fr: "Lame Zen",
			es: "Filo Zen",
			it: "Lama Zen",
			pt: "Lâmina Zen",
			de: "Zen-Klinge"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Zen Blade.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Lame Zen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Filo Zen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lama Zen.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Lâmina Zen.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Zen-Klinge nicht einsetzen."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card