import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [445],
	set: Set,

	name: {
		en: "Garchomp V",
		fr: "Carchacrok V",
		es: "Garchomp V",
		it: "Garchomp V",
		pt: "Garchomp V",
		de: "Knakrack V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Fighting", "Colorless"],

		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			es: "Garra Dragón",
			it: "Dragartigli",
			pt: "Garra de Dragão",
			de: "Drachenklaue"
		},

		damage: 120
	}, {
		cost: ["Water", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Sonic Strike",
			fr: "Frappe Sonique",
			es: "Golpe Sónico",
			it: "Colpo Sonico",
			pt: "Golpe Sônico",
			de: "Überschallschlag"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon. This attack does 220 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 3 Énergies de ce Pokémon. Cette attaque inflige 220 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta 3 Energías de este Pokémon. Este ataque hace 220 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta tre Energie da questo Pokémon. Questo attacco infligge 220 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte 3 Energias deste Pokémon. Este ataque causa 220 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon deines Gegners 220 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	retreat: 0,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
