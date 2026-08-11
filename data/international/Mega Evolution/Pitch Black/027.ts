import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Zeraora ex",
		fr: "Méga-Zeraora-ex",
		es: "Mega-Zeraora ex",
		'es-mx': "Mega-Zeraora ex",
		de: "Mega-Zeraora-ex",
		it: "Mega Zeraora-ex",
		pt: "Mega Zeraora ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [807],
	hp: 270,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Thunderous Fist",
			fr: "Poing Foudroyant",
			es: "Puño Atronador",
			'es-mx': "Puño Atronador",
			de: "Donnerfaust",
			it: "Pugno Tonante",
			pt: "Murro Trovejante"
		},

		cost: ["Lightning"],

		damage: "60×",

		effect: {
			en: "This attack does 60 damage for each {L} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 60 dégâts pour chaque Énergie {L} attachée à ce Pokémon.",
			es: "Este ataque hace 60 puntos de daño por cada Energía {L} unida a este Pokémon.",
			'es-mx': "Este ataque hace 60 puntos de daño por cada Energía {L} unida a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {L}-Energie 60 Schadenspunkte zu.",
			it: "Questo attacco infligge 60 danni per ogni Energia {L} assegnata a questo Pokémon.",
			pt: "Este ataque causa 60 pontos de dano para cada Energia {L} ligada a este Pokémon."
		}
	}, {
		name: {
			en: "Zepto Turn",
			fr: "Zepto Tour",
			es: "Zeptogiro",
			'es-mx': "Zeptogiro",
			de: "Zeptowende",
			it: "Zeptovirata",
			pt: "Volta Veloz"
		},

		cost: ["Lightning", "Lightning", "Lightning"],

		damage: 150,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno nella tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895787,
				tcgplayer: 704784
			}
		},
	],
}

export default card
