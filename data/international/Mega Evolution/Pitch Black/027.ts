import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Zeraora ex",
		'fr-fr': "Méga-Zeraora-ex",
		'es-es': "Mega-Zeraora ex",
		'es-mx': "Mega-Zeraora ex",
		'de-de': "Mega-Zeraora-ex",
		'it-it': "Mega Zeraora-ex",
		'pt-br': "Mega Zeraora ex"
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
			'en-us': "Thunderous Fist",
			'fr-fr': "Poing Foudroyant",
			'es-es': "Puño Atronador",
			'es-mx': "Puño Atronador",
			'de-de': "Donnerfaust",
			'it-it': "Pugno Tonante",
			'pt-br': "Murro Trovejante"
		},

		cost: ["Lightning"],

		damage: "60×",

		effect: {
			'en-us': "This attack does 60 damage for each {L} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chaque Énergie {L} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 60 puntos de daño por cada Energía {L} unida a este Pokémon.",
			'es-mx': "Este ataque hace 60 puntos de daño por cada Energía {L} unida a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {L}-Energie 60 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 60 danni per ogni Energia {L} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Energia {L} ligada a este Pokémon."
		}
	}, {
		name: {
			'en-us': "Zepto Turn",
			'fr-fr': "Zepto Tour",
			'es-es': "Zeptogiro",
			'es-mx': "Zeptogiro",
			'de-de': "Zeptowende",
			'it-it': "Zeptovirata",
			'pt-br': "Volta Veloz"
		},

		cost: ["Lightning", "Lightning", "Lightning"],

		damage: 150,

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'it-it': "Scambia questo Pokémon con uno nella tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco."
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
