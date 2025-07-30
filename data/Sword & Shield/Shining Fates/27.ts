import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [834],
	set: Set,

	name: {
		fr: "Torgamord",
		en: "Drednaw",
		es: "Drednaw",
		it: "Drednaw",
		pt: "Drednaw",
		de: "Kamalm"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		fr: "Khélocrok",
		en: "Chewtle"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Exosquelette",
			en: "Exoskeleton",
			es: "Exosqueleto",
			it: "Esoscheletro",
			pt: "Exo-esqueleto",
			de: "Exoskelett"
		},

		effect: {
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			fr: "Coud'Krâne",
			en: "Skull Bash",
			es: "Cabezazo",
			it: "Capocciata",
			pt: "Quebra-crânio",
			de: "Schädelwumme"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
	},

	thirdParty: {
		cardmarket: 539158
	}
}

export default card
