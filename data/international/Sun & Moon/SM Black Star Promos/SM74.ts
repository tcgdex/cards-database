import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Regirock",
		'fr-fr': "Regirock",
		'es-es': "Regirock",
		'it-it': "Regirock",
		'pt-br': "Regirock",
		'de-de': "Regirock"
	},
	illustrator: "kawayoo",
	rarity: "Promo",
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
				'en-us': "Rock Peak Growl",
				'fr-fr': "Pic Rocheux Grondant",
				'es-es': "Gruñido Pico Roca",
				'it-it': "Piccoruggito",
				'pt-br': "Uivo Pico de Rocha",
				'de-de': "Steingipfelgrollen"
			},
			effect: {
				'en-us': "Your Registeel’s attacks do 10 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de vos Registeel infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Los ataques de tus Registeel hacen 10 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Gli attacchi dei tuoi Registeel infliggono 10 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Os ataques dos seus Registeel causam 10 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Die Attacken deiner Registeel fügen dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
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
				'en-us': "Tough Swing",
				'fr-fr': "Frappe Solide",
				'es-es': "Golpe Sólido",
				'it-it': "Colpo Spietato",
				'pt-br': "Tacada Sólida",
				'de-de': "Wuchtiger Hieb"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
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




	description: {
		'en-us': "Its entire body is made of rock. If any part chips off in battle, it attaches rocks to repair itself.",
	},
}

export default card
