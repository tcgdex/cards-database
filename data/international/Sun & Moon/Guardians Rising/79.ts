import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Honchkrow",
		'fr-fr': "Corboss",
		'es-es': "Honchkrow",
		'it-it': "Honchkrow",
		'pt-br': "Honchkrow",
		'de-de': "Kramshef"
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
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Feint Attack",
				'fr-fr': "Feinte",
				'es-es': "Finta",
				'it-it': "Finta",
				'pt-br': "Ataque Dissimulado",
				'de-de': "Finte"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Pokémon. This damage isn’t affected by Weakness, Resistance, or any other effects on that Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en ese Pokémon.",
				'it-it': "Questo attacco infligge 30 danni a un Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente su quel Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos naquele Pokémon.",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf jenem Pokémon nicht verändert."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Raven’s Claw",
				'fr-fr': "Serre de Corbeau",
				'es-es': "Garra Azabache",
				'it-it': "Artiglio Corvino",
				'pt-br': "Garra de Corvo",
				'de-de': "Rabenkralle"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on all of your opponent’s Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur les Pokémon de votre adversaire.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en todos los Pokémon de tu rival.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sui Pokémon del tuo avversario.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano em todos os Pokémon do seu oponente.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf allen Pokémon deines Gegners zu."
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

	description: {
		'en-us': "A single cry from this nocturnal Pokémon, and more than a hundred of its Murkrow cronies will assemble.",
	},

	thirdParty: {
		cardmarket: 297537,
		tcgplayer: 130991
	}
}

export default card
