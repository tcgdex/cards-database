import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Scream Tail",
		fr: "Hurle-Queue",
		es: "Colagrito",
		it: "Codaurlante",
		pt: "Cauda Brado",
		de: "Brüllschweif"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Slap",
			fr: "Gifle",
			es: "Bofetón",
			it: "Sberla",
			pt: "Tapa",
			de: "Hieb"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Roaring Scream",
			fr: "Hurlement Bestial",
			es: "Grito Rugiente",
			it: "Urlo Ruggente",
			pt: "Brado Estrondo",
			de: "Tosendes Gebrüll"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon for each damage counter on this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 20 puntos de daño a uno de los Pokémon de tu rival por cada contador de daño en este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni segnalino danno presente su questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente para cada contador de dano neste Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card