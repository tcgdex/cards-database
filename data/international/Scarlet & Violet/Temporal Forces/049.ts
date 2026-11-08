import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [964],
	set: Set,

	name: {
		'en-us': "Palafin",
		'fr-fr': "Superdofin",
		'es-es': "Palafin",
		'it-it': "Palafin",
		'pt-br': "Palafin",
		'de-de': "Delfinator"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Finizen",
		'fr-fr': "Dofin",
		'es-es': "Finizen",
		'it-it': "Finizen",
		'pt-br': "Finizen",
		'de-de': "Normifin"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Vanguard Punch",
			'fr-fr': "Poing Avant-Garde",
			'es-es': "Puño Vanguardia",
			'it-it': "Pugno del Paladino",
			'pt-br': "Soco de Vanguarda",
			'de-de': "Avantgarde-Hieb"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself for each damage counter on it.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts pour chaque marqueur de dégâts placé sur lui.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo por cada contador de daño que tenga sobre él.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso per ogni segnalino danno presente su di esso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo para cada contador de dano nele.",
			'de-de': "Dieses Pokémon fügt für jede auf ihm liegende Schadensmarke auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 130
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Double Hit",
			'fr-fr': "Coup Double",
			'es-es': "Doble Golpe",
			'it-it': "Doppiosmash",
			'pt-br': "Golpe Duplo",
			'de-de': "Doppelschlag"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 90 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon's ancient genes have awakened. It is now so extraordinarily strong that it can easily lift a cruise ship with one fin.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760679,
				tcgplayer: 542793
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760679,
				tcgplayer: 542793
			}
		},
	],

	illustrator: "DOM",

}

export default card