import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
		es: "Mudsdale",
		it: "Mudsdale",
		pt: "Mudsdale",
		de: "Pampross"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mudbray",
		fr: "Tiboudet",
		es: "Mudbray",
		it: "Mudbray",
		pt: "Mudbray",
		de: "Pampuli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Double Impact",
				fr: "Double Impact",
				es: "Impacto Doble",
				it: "Doppio Impatto",
				pt: "Impacto Duplo",
				de: "Doppelter Einschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 120 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 120 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 120 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu."
			},
			damage: "120×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Mud that hardens around a Mudsdale's legs sets harder than stone. It's so hard that it allows this Pokémon to scrap a truck with a single kick."
	},

	dexId: [750],

	thirdParty: {
		cardmarket: 436649
	}
}

export default card
