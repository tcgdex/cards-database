import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [874],
	set: Set,

	name: {
		en: "Stonjourner",
		fr: "Dolman",
		es: "Stonjourner",
		it: "Stonjourner",
		pt: "Stonjourner",
		de: "Humanolith"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Exoskeleton",
			fr: "Exosquelette",
			es: "Exosqueleto",
			it: "Esoscheletro",
			pt: "Exoesqueleto",
			de: "Exoskelett"
		},

		effect: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Mega Kick",
			fr: "Ultimawashi",
			es: "Megapatada",
			it: "Megacalcio",
			pt: "Megachute",
			de: "Megakick"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "Yuka Morii",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}]
}

export default card