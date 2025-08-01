import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Passimian",
		fr: "Quartermac",
		es: "Passimian",
		it: "Passimian",
		pt: "Passimian",
		de: "Quartermak"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		766,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Huddle",
				fr: "Rassemblement Puissant",
				es: "Poder del Banquillo",
				it: "Time Out Tecnico",
				pt: "Grupo de Poder",
				de: "Power-Huddle"
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, your Passimian’s attacks do 30 more damage to your opponent’s Active Evolution Pokémon (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est sur votre Banc, les attaques de vos Quartermac infligent 30 dégâts supplémentaires au Pokémon Actif évolué de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Mientras este Pokémon esté en tu Banca, los ataques de tus Passimian hacen 30 puntos de daño más al Pokémon Evolución Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Fintanto che questo Pokémon è nella tua panchina, gli attacchi dei tuoi Passimian infliggono 30 danni in più al Pokémon Evoluzione attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Enquanto este Pokémon estiver no seu Banco, os ataques de seus Passimian causam 30 pontos de dano a mais ao Pokémon de Evolução Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Solang sich dieses Pokémon auf deiner Bank befindet, fügen die Attacken deiner Quartermak dem Aktiven Entwicklungs-Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Hurl",
				fr: "Lance-Pierre",
				es: "Lanzamiento de Rocas",
				it: "Scaglia Pietre",
				pt: "Lançamento de Pedras",
				de: "Steinschleuderer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 315998
	}
}

export default card
