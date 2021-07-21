import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
		es: "Dugtrio de Alola",
		it: "Dugtrio di Alola",
		pt: "Dugtrio de Alola",
		de: "Alola-Digdri"
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tangling Hair",
				fr: "Mèche Rebelle",
				es: "Rizos Rebeldes",
				it: "Boccolidoro",
				pt: "Cabelo Desgrenhado",
				de: "Lockenkopf"
			},
			effect: {
				en: "Your opponent’s Active Pokémon’s Retreat Cost is Colorless more.",
				fr: "Le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de Colorless.",
				es: "El Coste de Retirada del Pokémon Activo de tu rival es de Colorless más.",
				it: "Il costo di ritirata del Pokémon attivo del tuo avversario aumenta di Colorless.",
				pt: "O custo de Recuo do Pokémon Ativo do seu oponente é Colorless a mais.",
				de: "Die Rückzugskosten des Aktiven Pokémon deines Gegners erhöhen sich um Colorless."
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
				en: "Dig Under",
				fr: "Terrassement",
				es: "Enterrarse",
				it: "Attacco Sotterraneo",
				pt: "Solapar",
				de: "Schaufel unter"
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent’s Pokémon. This damage isn’t affected by Weakness or Resistance.",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad o Resistencia.",
				it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza ou Resistência.",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
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
