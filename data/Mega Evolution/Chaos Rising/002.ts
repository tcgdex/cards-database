import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Kakuna",
		fr: "Coconfort",
		es: "Kakuna",
		'es-mx': "Kakuna",
		de: "Kokuna",
		it: "Kakuna",
		pt: "Kakuna"
	},

	illustrator: "Mugi Hamada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [14],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Weedle"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Exoskeleton",
			fr: "Exosquelette",
			es: "Exoesqueleto",
			'es-mx': "Exoesqueleto",
			de: "Exoskelett",
			it: "Esoscheletro",
			pt: "Exoesqueleto"
		},

		effect: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Este Pokémon recibe 20 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			de: "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	attacks: [{
		name: {
			en: "Hang Down",
			fr: "Suspension",
			es: "Prender",
			'es-mx': "Colgadera",
			de: "Herunterhängen",
			it: "Tirar Giù",
			pt: "Dependurar"
		},

		cost: ["Grass"],
		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886394,
				tcgplayer: 693502
			}
		},
	],
}

export default card
