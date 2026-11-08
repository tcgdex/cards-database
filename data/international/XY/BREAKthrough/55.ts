import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Raikou",
		'fr-fr': "Raikou",
		'es-es': "Raikou",
		'it-it': "Raikou",
		'pt-br': "Raikou",
		'de-de': "Raikou"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shining Body",
				'fr-fr': "Corps Rayonnant",
				'es-es': "Cuerpo Radiante",
				'it-it': "Corpo Lucente",
				'pt-br': "Corpo Brilhante",
				'de-de': "Strahlender Körper"
			},
			effect: {
				'en-us': "If this Pokémon has any Lightning Energy attached to it, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Si de l'Énergie Lightning est attachée à ce Pokémon, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Si este Pokémon tiene alguna Energía Lightning unida a él, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Se questo Pokémon ha delle Energie Lightning assegnate, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Se este Pokémon possuir alguma Energia Lightning ligada a ele, qualquer dano causado a ele por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Wenn an dieses Pokémon bereits mindestens 1 Lightning-Energie angelegt ist, wird Schaden, der diesem Pokémon durch einen gegnerischen Angriff zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Lance",
				'fr-fr': "Lance Foudre",
				'es-es': "Asta Trueno",
				'it-it': "Lanciabolide",
				'pt-br': "Lança do Trovão",
				'de-de': "Donnerlanze"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Lightning Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Lightning attachée à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Lightning unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Lightning assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 20 de danos adicionais para cada Energia Lightning ligada a este Pokémon.",
				'de-de': "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Lightning-Energie zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This rough Pokémon stores energy inside its body, then sweeps across the land, shooting off electricity.",
	},

	thirdParty: {
		cardmarket: 286301,
		tcgplayer: 107174
	}
}

export default card
