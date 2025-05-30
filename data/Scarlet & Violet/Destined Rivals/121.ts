import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Stonjourner",
		fr: "Dolman",
		de: "Humanolith",
		it: "Stonjourner",
		es: "Stonjourner",
		pt: "Stonjourner"
	},

	illustrator: "Yuka Morii",
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
			de: "Exoskelett",
			it: "Esoscheletro",
			es: "Exosqueleto",
			pt: "Exoesqueleto"
		},

		effect: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			es: "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Este Pokémon recebe 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Mega Kick",
			fr: "Ultimawashi",
			de: "Megakick",
			it: "Megacalcio",
			es: "Megapatada",
			pt: "Megachute"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card