import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou",
		es: "Raikou",
		it: "Raikou",
		pt: "Raikou",
		de: "Raikou"
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
				en: "Shining Body",
				fr: "Corps Rayonnant",
				es: "Cuerpo Radiante",
				it: "Corpo Lucente",
				pt: "Corpo Brilhante",
				de: "Strahlender Körper"
			},
			effect: {
				en: "If this Pokémon has any Lightning Energy attached to it, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Si de l'Énergie Lightning est attachée à ce Pokémon, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Si este Pokémon tiene alguna Energía Lightning unida a él, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "Se questo Pokémon ha delle Energie Lightning assegnate, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Se este Pokémon possuir alguma Energia Lightning ligada a ele, qualquer dano causado a ele por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Wenn an dieses Pokémon bereits mindestens 1 Lightning-Energie angelegt ist, wird Schaden, der diesem Pokémon durch einen gegnerischen Angriff zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Thunder Lance",
				fr: "Lance Foudre",
				es: "Asta Trueno",
				it: "Lanciabolide",
				pt: "Lança do Trovão",
				de: "Donnerlanze"
			},
			effect: {
				en: "This attack does 20 more damage for each Lightning Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Lightning attachée à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Lightning unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Lightning assegnata a questo Pokémon.",
				pt: "Este ataque causa 20 de danos adicionais para cada Energia Lightning ligada a este Pokémon.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Lightning-Energie zu."
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

	thirdParty: {
		cardmarket: 286301
	}
}

export default card
