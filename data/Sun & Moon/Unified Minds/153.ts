import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Latias",
		fr: "Latias",
		es: "Latias",
		it: "Latias",
		pt: "Latias",
		de: "Latias"
	},
	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Arrow",
				fr: "Flèche d’Énergie",
				es: "Flecha Energía",
				it: "Freccia Energetica",
				pt: "Flecha de Energia",
				de: "Energiepfeil"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to 1 of your opponent’s Pokémon to that Pokémon. This damage isn’t affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à l’un des Pokémon de votre adversaire à ce Pokémon-là. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "Este ataque hace 20 puntos de daño por cada Energía unida a 1 de los Pokémon de tu rival a ese Pokémon. Este daño no se ve afectado por Debilidad o Resistencia.",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a quello stesso Pokémon. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada a 1 dos Pokémon do seu oponente àquele Pokémon. Este dano não é afetado por Fraqueza ou Resistência.",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte mal der Anzahl der an jenes Pokémon angelegten Energien zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: '20x',

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Speed Wing",
				fr: "Ailes Vives",
				es: "Ala Veloz",
				it: "Alaveloce",
				pt: "Asa da Velocidade",
				de: "Turboschwinge"
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
