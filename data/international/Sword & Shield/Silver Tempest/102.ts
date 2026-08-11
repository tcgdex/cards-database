import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [901],
	set: Set,

	name: {
		'en-us': "Ursaluna V",
		'fr-fr': "Ursaking V",
		'es-es': "Ursaluna V",
		'it-it': "Ursaluna V",
		'pt-br': "Ursaluna V",
		'de-de': "Ursaluna V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Hard Coat",
			'fr-fr': "Strate Dure",
			'es-es': "Capa Resistente",
			'it-it': "Patina Dura",
			'pt-br': "Camada Resistente",
			'de-de': "Schutzschicht"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Peat Shoulder",
			'fr-fr': "Épaule Tourbe",
			'es-es': "Hombro Turba",
			'it-it': "Torbaspalla",
			'pt-br': "Ombro de Turfa",
			'de-de': "Torfschulter"
		},

		effect: {
			'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu."
		},

		damage: "220-"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682149,
				tcgplayer: 451756
			}
		},
	],
}

export default card
