import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [423],
	set: Set,

	name: {
		en: "Gastrodon",
		fr: "Tritosor",
		es: "Gastrodon",
		it: "Gastrodon",
		pt: "Gastrodon",
		de: "Gastrodon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Shellos",
		fr: "Sancoki",
		es: "Shellos",
		it: "Shellos",
		pt: "Shellos",
		de: "Schalellos"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Recover",
			fr: "Soin",
			es: "Recuperación",
			it: "Ripresa",
			pt: "Recuperação",
			de: "Genesung"
		},

		effect: {
			en: "Discard an Energy from this Pokémon and heal all damage from it.",
			fr: "Défaussez une Énergie de ce Pokémon, puis soignez tous les dégâts de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon y cura todos sus puntos de daño.",
			it: "Scarta un'Energia da questo Pokémon e curalo da tutti i danni.",
			pt: "Descarte 1 Energia deste Pokémon e cure todo o dano dele.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel und heile bei ihm allen Schaden."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Earthquake",
			fr: "Séisme",
			es: "Terremoto",
			it: "Terremoto",
			pt: "Terremoto",
			de: "Erdbeben"
		},

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 170
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674115
	}
}

export default card