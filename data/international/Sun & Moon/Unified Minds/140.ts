import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Hoopa",
		'fr-fr': "Hoopa",
		'es-es': "Hoopa",
		'it-it': "Hoopa",
		'pt-br': "Hoopa",
		'de-de': "Hoopa"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		720,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Evil Admonition",
				'fr-fr': "Réprimande Maléfique",
				'es-es': "Amonestación Malvada",
				'it-it': "Avvertimento Malvagio",
				'pt-br': "Advertência Maligna",
				'de-de': "Böses Gebot"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each of your opponent’s Pokémon that has an Ability.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de votre adversaire ayant un talent.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon de tu rival que tenga una habilidad.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon del tuo avversario che abbia un’abilità.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada um dos Pokémon do seu oponente que tiver uma Habilidade.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Pokémon deines Gegners zu, die eine Fähigkeit haben."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Shock",
				'fr-fr': "Choc Cérébral",
				'es-es': "Choque Cerebral",
				'it-it': "Shock Mentale",
				'pt-br': "Choque Mental",
				'de-de': "Verstandesschock"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 80,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This troublemaker sends anything and everything to faraway places using its loop, which can warp space.",
	},

	thirdParty: {
		cardmarket: 388497,
		tcgplayer: 195119
	}
}

export default card
