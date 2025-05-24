import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [208],
	set: Set,

	name: {
		en: "Steelix",
		fr: "Steelix",
		es: "Steelix",
		it: "Steelix",
		pt: "Steelix",
		de: "Stahlos"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
		de: "Onix"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		en: "It is thought its body transformed as a result of iron accumulating internally from swallowing soil."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Powerful Rage",
			fr: "Rage Massive",
			de: "Mächtige Wut",
			es: "Ira Recia",
			pt: "Ira Poderosa",
			it: "Forzafuria"
		},

		damage: "20×",

		effect: {
			en: "This attack does 20 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Earthquake",
			fr: "Séisme",
			de: "Erdbeben",
			es: "Terremoto",
			pt: "Terremoto",
			it: "Terremoto"
		},

		damage: 180,

		effect: {
			en: "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 30 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
