import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [205],
	set: Set,

	name: {
		'en-us': "Forretress",
		'fr-fr': "Foretress",
		'es-es': "Forretress",
		'it-it': "Forretress",
		'pt-br': "Forretress",
		'de-de': "Forstellka"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik",
		'es-es': "Pineco",
		'it-it': "Pineco",
		'pt-br': "Pineco",
		'de-de': "Tannza"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Spike Cannon",
			'fr-fr': "Picanon",
			'es-es': "Clavo Cañón",
			'it-it': "Sparalance",
			'pt-br': "Canhão de Espinhos",
			'de-de': "Dornkanone"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Steel Tackle",
			'fr-fr': "Charge d'Acier",
			'es-es': "Placaje de Acero",
			'it-it': "Ferrazione",
			'pt-br': "Colisão de Aço",
			'de-de': "Stahltackle"
		},

		effect: {
			'en-us': "This Pokémon also does 40 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 40 dégâts.",
			'es-es': "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 40 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "Its entire body is shielded by a steel-hard shell. What lurks inside this shell is a total mystery.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760740,
				tcgplayer: 542854
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760740,
				tcgplayer: 542854
			}
		},
	],

	illustrator: "osare",

}

export default card