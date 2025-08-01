import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [321],
	set: Set,

	name: {
		en: "Wailord",
		fr: "Wailord",
		es: "Wailord",
		it: "Wailord",
		pt: "Wailord",
		de: "Wailord"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
		es: "Wailmer",
		it: "Wailmer",
		pt: "Wailmer",
		de: "Wailmer"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Jumbo-Sized",
			fr: "Format Géant",
			es: "Tamaño Gigante",
			it: "Formato Gigante",
			pt: "Baita Tamanhão",
			de: "Großkoloss"
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
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			en: "Special Wave",
			fr: "Vague Spéciale",
			es: "Ola Especial",
			it: "Onda Speciale",
			pt: "Onda Especial",
			de: "Spezialwelle"
		},

		effect: {
			en: "If this Pokémon has any Special Energy attached, this attack does 120 more damage.",
			fr: "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Especial unida a él, este ataque hace 120 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682080
	}
}

export default card