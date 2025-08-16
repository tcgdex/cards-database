import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
		es: "Steelix",
		it: "Steelix",
		pt: "Steelix",
		de: "Stahlos"
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
		en: "Onix",
		fr: "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thumping Fall",
				fr: "Chute Sourde",
				es: "Caída Descomunal",
				it: "Caduta Sonante",
				pt: "Queda Feroz",
				de: "Dumpfer Fall"
			},
			effect: {
				en: "Discard any number of Pokémon with a Retreat Cost of exactly 4 from your hand. This attack does 50 damage for each card you discarded in this way.",
				fr: "Défaussez autant de Pokémon qui ont un Coût de Retraite de 4 que vous le voulez de votre main. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta cualquier cantidad de Pokémon con un Coste de Retirada de exactamente 4 de tu mano. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta un numero qualsiasi di Pokémon che hai in mano con un costo di ritirata esattamente pari a quattro. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte qualquer número de Pokémon da sua mão que tenham um custo de Recuo de exatamente 4. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
				de: "Lege beliebig viele Pokémon mit Rückzugskosten von genau 4 aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
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
				en: "Iron Tail",
				fr: "Queue de Fer",
				es: "Cola Férrea",
				it: "Codacciaio",
				pt: "Cauda de Ferro",
				de: "Eisenschweif"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 100 damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 100 dégâts pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 100 puntos de daño por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 100 danni ogni volta che esce testa.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 100 pontos de dano para cada cara.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
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

	thirdParty: {
		cardmarket: 398559,
		tcgplayer: 201184
	}
}

export default card
