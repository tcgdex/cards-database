import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
		es: "Shelgon",
		it: "Shelgon",
		pt: "Shelgon",
		de: "Draschel"
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 80,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
		es: "Bagon",
		it: "Bagon",
		pt: "Bagon",
		de: "Kindwurm"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette",
				es: "Exosqueleto",
				it: "Esoscheletro",
				pt: "Exo-esqueleto",
				de: "Exoskelett"
			},
			effect: {
				en: "Any damage done to this Pokémon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				es: "Cualquier daño infligido a este Pokémon por ataques se reduce en 10 (después de aplicar Debilidad y Resistencia).",
				it: "I danni inflitti a questo Pokémon dagli attacchi sono ridotti di 10, dopo aver applicato debolezza e resistenza.",
				pt: "Qualquer dano causado a este Pokémon por ataques será reduzido em 10 (após a aplicação de Fraqueza e Resistência).",
				de: "Schaden, der diesem Pokémon durch Angriffe zugefügt wird, wird um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-Boulé",
				es: "Placaje Giro",
				it: "Rollazione",
				pt: "Golpe de Colisão Rolante",
				de: "Rolltackle"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
