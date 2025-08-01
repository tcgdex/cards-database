import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Crabominable",
		fr: "Crabominable",
		es: "Crabominable",
		it: "Crabominable",
		pt: "Crabominable",
		de: "Krawell"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		740,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Gutsy Hammer",
				fr: "Marteau Courageux",
				es: "Martilleo Atrevido",
				it: "Martelbaldo",
				pt: "Martelada Corajosa",
				de: "Mutiger Hammer"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself for each damage counter on it.",
				fr: "Ce Pokémon s’inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este Pokémon se hace 10 puntos de daño a sí mismo por cada contador de daño que tenga sobre él.",
				it: "Questo Pokémon infligge 10 danni a se stesso per ogni segnalino danno presente su di esso.",
				pt: "Este Pokémon causa 10 pontos de dano a si mesmo para cada contador de dano nele.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte mal der Anzahl der auf ihm liegenden Schadensmarken zu."
			},
			damage: 80,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Double Stomp",
				fr: "Double Écrasement",
				es: "Pisotón Doble",
				it: "Doppio Pestone",
				pt: "Pisoteada Dupla",
				de: "Doppelstampfer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 40 danni in più ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 40 pontos de dano a mais para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 299476
	}
}

export default card
