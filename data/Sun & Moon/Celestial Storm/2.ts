import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
		es: "Weepinbell",
		it: "Weepinbell",
		pt: "Weepinbell",
		de: "Ultrigaria"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		70,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growth",
				fr: "Croissance",
				es: "Desarrollo",
				it: "Crescita",
				pt: "Crescimento",
				de: "Wachstum"
			},
			effect: {
				en: "Attach up to 2 Grass Energy cards from your hand to this Pokémon.",
				fr: "Attachez jusqu’à 2 cartes Énergie Grass de votre main à ce Pokémon.",
				es: "Une hasta 2 cartas de Energía Grass de tu mano a este Pokémon.",
				it: "Assegna a questo Pokémon fino a due carte Energia Grass dalla tua mano.",
				pt: "Ligue até 2 cartas de Energia Grass da sua mão a este Pokémon.",
				de: "Lege bis zu 2 Grass-Energiekarten aus deiner Hand an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Double Razor Leaf",
				fr: "Double Tranch’Herb",
				es: "Doble Hoja Afilada",
				it: "Doppie Foglielama",
				pt: "Folha Navalha Dupla",
				de: "Doppel-Rasierblatt"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361249
	}
}

export default card
