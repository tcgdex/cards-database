import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		fr: "Ymphect",
		en: "Pupitar",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	evolveFrom: {
		fr: "Embrylex",
		en: "Larvitar",
		es: "Larvitar",
		it: "Larvitar",
		pt: "Larvitar",
		de: "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Jet-Pierres",
			en: "Rock Throw",
			es: "Lanzarrocas",
			it: "Sassata",
			pt: "Lançamento de Rocha",
			de: "Steinwurf"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Charge Explosive",
			en: "Blasting Tackle",
			es: "Placaje Explosivo",
			it: "Azione Propulsiva",
			pt: "Investida Avassaladora",
			de: "Explosiver Tackle"
		},

		effect: {
			fr: "Cette attaque inflige aussi 20 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			en: "This attack also does 20 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			es: "Este ataque también hace 20 puntos de daño a uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a 1 dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Souichirou Gunjima",

	thirdParty: {
		cardmarket: 725186
	}
}

export default card