import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix",
		'es-es': "Steelix",
		'it-it': "Steelix",
		'pt-br': "Steelix",
		'de-de': "Stahlos"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 170,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thumping Fall",
				'fr-fr': "Chute Sourde",
				'es-es': "Caída Descomunal",
				'it-it': "Caduta Sonante",
				'pt-br': "Queda Feroz",
				'de-de': "Dumpfer Fall"
			},
			effect: {
				'en-us': "Discard any number of Pokémon with a Retreat Cost of exactly 4 from your hand. This attack does 50 damage for each card you discarded in this way.",
				'fr-fr': "Défaussez autant de Pokémon qui ont un Coût de Retraite de 4 que vous le voulez de votre main. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta cualquier cantidad de Pokémon con un Coste de Retirada de exactamente 4 de tu mano. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta un numero qualsiasi di Pokémon che hai in mano con un costo di ritirata esattamente pari a quattro. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte qualquer número de Pokémon da sua mão que tenham um custo de Recuo de exatamente 4. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
				'de-de': "Lege beliebig viele Pokémon mit Rückzugskosten von genau 4 aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Tail",
				'fr-fr': "Queue de Fer",
				'es-es': "Cola Férrea",
				'it-it': "Codacciaio",
				'pt-br': "Cauda de Ferro",
				'de-de': "Eisenschweif"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 100 damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 100 dégâts pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 100 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 100 danni ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 100 pontos de dano para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
			},
			damage: "100×",

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

	retreat: 4,

	description: {
		'en-us': "Tempered underground under high pressure and heat, its body is harder than any metal.",
	},

	thirdParty: {
		cardmarket: 398559,
		tcgplayer: 201184
	}
}

export default card
