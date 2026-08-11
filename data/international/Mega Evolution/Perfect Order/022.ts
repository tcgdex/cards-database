import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [131],

	name: {
		'en-us': "Lapras ex",
		'fr-fr': "Lokhlass-ex",
		'es-es': "Lapras ex",
		'es-mx': "Lapras ex",
		'de-de': "Lapras-ex",
		'it-it': "Lapras-ex",
		'pt-br': "Lapras ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Hydro Turn",
			'fr-fr': "Hydro-Tour",
			'es-es': "Hidrogiro",
			'es-mx': "Hidrogiro",
			'de-de': "Hydrowende",
			'it-it': "Idrovirata",
			'pt-br': "Revira Água"
		},

		effect: {
			'en-us': "This attack does 30 damage for each {W} Energy attached to this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie {W} attachée à ce Pokémon. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía {W} unida a este Pokémon. Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Energía {W} unida a este Pokémon. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 30 Schadenspunkte zu. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia {W} assegnata a questo Pokémon. Scambia questo Pokémon con uno nella tua panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia {W} ligada a este Pokémon. Troque este Pokémon por 1 dos seus Pokémon no Banco."
		},

		damage: "30×"
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'es-mx': "Surf",
			'de-de': "Surfer",
			'it-it': "Surf",
			'pt-br': "Surfar"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684329,
				cardmarket: 877434
			}
		}
	],

}

export default card
