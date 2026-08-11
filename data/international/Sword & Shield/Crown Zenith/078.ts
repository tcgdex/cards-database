import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [510],
	set: Set,

	name: {
		'en-us': "Liepard",
		'fr-fr': "Léopardus",
		'es-es': "Liepard",
		'it-it': "Liepard",
		'pt-br': "Liepard",
		'de-de': "Kleoparda"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Fury Swipes",
			'fr-fr': "Combo-Griffe",
			'es-es': "Golpes Furia",
			'it-it': "Sfuriate",
			'pt-br': "Golpes de Fúria",
			'de-de': "Kratzfurie"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Don't be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691796,
				tcgplayer: 478217
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691796,
				tcgplayer: 478217
			}
		},
	],
}

export default card
