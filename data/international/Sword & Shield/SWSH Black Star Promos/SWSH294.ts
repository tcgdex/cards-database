import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [101],
	set: Set,

	name: {
		'fr-fr': "Électrode de Hisui V",
		'de-de': "Hisui-Lektrobal V",
		'es-es': "Electrode de Hisui V",
		'pt-br': "Electrode de Hisui V",
		'it-it': "Electrode di Hisui V",
		'en-us': "Hisuian Electrode V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'fr-fr': "Explosion Capricieuse",
			'de-de': "Vor Wut platzen",
			'es-es': "Rabieta Explosiva",
			'pt-br': "Explosão Birrenta",
			'it-it': "Collerabomba",
			'en-us': "Tantrum Blast"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 100 dégâts pour chaque État Spécial affectant ce Pokémon.",
			'de-de': "Diese Attacke fügt für jeden Speziellen Zustand, von dem dieses Pokémon betroffen ist, 100 Schadenspunkte zu.",
			'es-es': "Este ataque hace 100 puntos de daño por cada Condición Especial que afecte a este Pokémon.",
			'pt-br': "Este ataque causa 100 pontos de dano para cada Condição Especial afetando este Pokémon.",
			'it-it': "Questo attacco infligge 100 danni per ogni condizione speciale che influenza questo Pokémon.",
			'en-us': "This attack does 100 damage for each Special Condition affecting this Pokémon."
		},

		damage: "100×"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Tir Solaire",
			'de-de': "Solarschuss",
			'es-es': "Disparo Solar",
			'pt-br': "Disparo Solar",
			'it-it': "Colpo Solare",
			'en-us': "Solar Shot"
		},

		effect: {
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'en-us': "Discard all Energy from this Pokémon."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 671806
	}
}

export default card
