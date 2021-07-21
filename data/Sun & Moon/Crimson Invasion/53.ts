import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Regirock",
		fr: "Regirock",
		es: "Regirock",
		it: "Regirock",
		pt: "Regirock",
		de: "Regirock"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		377,
	],
	hp: 130,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rock Peak Growl",
				fr: "Pic Rocheux Grondant",
				es: "Gruñido Pico Roca",
				it: "Piccoruggito",
				pt: "Uivo Pico de Rocha",
				de: "Steingipfelgrollen"
			},
			effect: {
				en: "Your Registeel’s attacks do 10 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Registeel infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tus Registeel hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Gli attacchi dei tuoi Registeel infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Os ataques dos seus Registeel causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Die Attacken deiner Registeel fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Tough Swing",
				fr: "Frappe Solide",
				es: "Golpe Sólido",
				it: "Colpo Spietato",
				pt: "Tacada Sólida",
				de: "Wuchtiger Hieb"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 110,

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
