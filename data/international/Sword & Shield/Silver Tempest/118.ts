import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [375],
	set: Set,

	name: {
		'en-us': "Metang",
		'fr-fr': "Métang",
		'es-es': "Metang",
		'it-it': "Metang",
		'pt-br': "Metang",
		'de-de': "Metang"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'es-es': "Beldum",
		'it-it': "Beldum",
		'pt-br': "Beldum",
		'de-de': "Tanhel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Bullet Punch",
			'fr-fr': "Pisto-Poing",
			'es-es': "Puño Bala",
			'it-it': "Pugnoscarica",
			'pt-br': "Soco Projétil",
			'de-de': "Patronenhieb"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "30+"
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
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Two Beldum have become stuck together via their own magnetic forces. With two brains, the resulting Metang has doubled psychic powers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682165,
				tcgplayer: 451772
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682165,
				tcgplayer: 451772
			}
		},
	],
}

export default card
