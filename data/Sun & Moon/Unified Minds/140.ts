import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Hoopa",
		fr: "Hoopa",
		es: "Hoopa",
		it: "Hoopa",
		pt: "Hoopa",
		de: "Hoopa"
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
				en: "Evil Admonition",
				fr: "Réprimande Maléfique",
				es: "Amonestación Malvada",
				it: "Avvertimento Malvagio",
				pt: "Advertência Maligna",
				de: "Böses Gebot"
			},
			effect: {
				en: "This attack does 20 more damage for each of your opponent’s Pokémon that has an Ability.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de votre adversaire ayant un talent.",
				es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon de tu rival que tenga una habilidad.",
				it: "Questo attacco infligge 20 danni in più per ogni Pokémon del tuo avversario che abbia un’abilità.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada um dos Pokémon do seu oponente que tiver uma Habilidade.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Pokémon deines Gegners zu, die eine Fähigkeit haben."
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
				en: "Mind Shock",
				fr: "Choc Cérébral",
				es: "Choque Cerebral",
				it: "Shock Mentale",
				pt: "Choque Mental",
				de: "Verstandesschock"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				de: "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
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



}

export default card
