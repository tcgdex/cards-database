import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [786],
	set: Set,

	name: {
		'en-us': "Tapu Lele",
		'fr-fr': "Tokopiyon",
		'es-es': "Tapu Lele",
		'it-it': "Tapu Lele",
		'pt-br': "Tapu Lele",
		'de-de': "Kapu-Fala"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Energy Burst",
			'fr-fr': "Explosion d'Énergie",
			'es-es': "Explosión de Energía",
			'it-it': "Energiscoppio",
			'pt-br': "Explosão de Energia",
			'de-de': "Energieausbruch"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Energy attached to both Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
			'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
			'de-de': "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Spiral Drain",
			'fr-fr': "Spirale Épuisante",
			'es-es': "Drenaje Espiral",
			'it-it': "Assorbimento Spirale",
			'pt-br': "Dreno Espiral",
			'de-de': "Spiralsauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Although called a guardian deity, Tapu Lele is devoid of guilt about its cruel disposition and can be described as nature incarnate.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691781,
				tcgplayer: 478183
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691781,
				tcgplayer: 478183
			}
		},
	],
}

export default card
