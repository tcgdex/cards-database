import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
		es: "Quagsire",
		it: "Quagsire",
		pt: "Quagsire",
		de: "Morlord"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Laid-Back",
				fr: "Tranquillou",
				es: "Despreocupación",
				it: "Rilassato",
				pt: "Relaxado",
				de: "Entspannt"
			},
			effect: {
				en: "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				es: "Cualquier daño hecho a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				it: "I danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				pt: "Qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				de: "Schaden, der diesem Pokémon durch Angriffe zugefügt wird, wird um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud Gun",
				fr: "Giclée de Boue",
			},
			effect: {
				en: "If this Pokémon has any Fighting Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l'Énergie Fighting est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
