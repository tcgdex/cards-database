import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Cetitan",
		fr: "Balbalèze",
		es: "Cetitan",
		it: "Cetitan",
		pt: "Cetitan",
		de: "Kolowal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Solid Body",
			fr: "Corps Résistant",
			es: "Cuerpo Sólido",
			it: "Corpo Solido",
			pt: "Corpo Robusto",
			de: "Solider Körper"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dangerous Mouth",
			fr: "Bouche Dangereuse",
			es: "Boca Peligrosa",
			it: "Fauci Pericolose",
			pt: "Boca Perigosa",
			de: "Gefährliches Maul"
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card