import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic",
		'de-de': "Ibitak",
		'it-it': "Fearow",
		'es-es': "Fearow",
		'pt-br': "Fearow",
		'es-mx': "Fearow"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
		'de-de': "Habitak",
		'it-it': "Spearow",
		'es-es': "Spearow",
		'pt-br': "Spearow",
		'es-mx': "Spearow"
	},
	stage: "Stage1",
	dexId: [22],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Repeating Drill",
			'fr-fr': "Multivrille",
			'de-de': "Mehrfach-Bohrer",
			'it-it': "Ripetitrapano",
			'es-es': "Taladro",
			'pt-br': "Broca Repetidora",
			'es-mx': "Taladro Persistente"
		},

		effect: {
			'en-us': "Flip 5 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 5 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'de-de': "Wirf 5 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia cinque volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'es-es': "Lanza 5 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'pt-br': "Jogue 5 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'es-mx': "Lanza 5 monedas. Este ataque hace 30 puntos de daño por cada cara."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851174,
				tcgplayer: 654442
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851174,
				tcgplayer: 654442
			}
		},
	],
}

export default card
