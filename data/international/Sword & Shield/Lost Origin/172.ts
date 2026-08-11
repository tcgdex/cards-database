import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [101],
	set: Set,

	name: {
		'en-us': "Hisuian Electrode V",
		'fr-fr': "Électrode de Hisui V",
		'es-es': "Electrode de Hisui V",
		'it-it': "Electrode di Hisui V",
		'pt-br': "Electrode de Hisui V",
		'de-de': "Hisui-Lektrobal V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'en-us': "Tantrum Blast",
			'fr-fr': "Explosion Capricieuse",
			'es-es': "Rabieta Explosiva",
			'it-it': "Collerabomba",
			'pt-br': "Explosão Birrenta",
			'de-de': "Vor Wut platzen"
		},

		effect: {
			'en-us': "This attack does 100 damage for each Special Condition affecting this Pokémon.",
			'fr-fr': "Cette attaque inflige 100 dégâts pour chaque État Spécial affectant ce Pokémon.",
			'es-es': "Este ataque hace 100 puntos de daño por cada Condición Especial que afecte a este Pokémon.",
			'it-it': "Questo attacco infligge 100 danni per ogni condizione speciale che influenza questo Pokémon.",
			'pt-br': "Este ataque causa 100 pontos de dano para cada Condição Especial afetando este Pokémon.",
			'de-de': "Diese Attacke fügt für jeden Speziellen Zustand, von dem dieses Pokémon betroffen ist, 100 Schadenspunkte zu."
		},

		damage: "100×"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Solar Shot",
			'fr-fr': "Tir Solaire",
			'es-es': "Disparo Solar",
			'it-it': "Colpo Solare",
			'pt-br': "Disparo Solar",
			'de-de': "Solarschuss"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670823,
				tcgplayer: 284110
			}
		},
	],
}

export default card
