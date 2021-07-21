import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss",
		es: "Honchkrow",
		it: "Honchkrow",
		pt: "Honchkrow",
		de: "Kramshef"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		430,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
				es: "Finta",
				it: "Finta",
				pt: "Ataque Dissimulado",
				de: "Finte"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent’s Pokémon. This damage isn’t affected by Weakness, Resistance, or any other effects on that Pokémon.",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en ese Pokémon.",
				it: "Questo attacco infligge 30 danni a un Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente su quel Pokémon.",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos naquele Pokémon.",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf jenem Pokémon nicht verändert."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Raven’s Claw",
				fr: "Serre de Corbeau",
				es: "Garra Azabache",
				it: "Artiglio Corvino",
				pt: "Garra de Corvo",
				de: "Rabenkralle"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on all of your opponent’s Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur les Pokémon de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en todos los Pokémon de tu rival.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sui Pokémon del tuo avversario.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano em todos os Pokémon do seu oponente.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf allen Pokémon deines Gegners zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
