import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [61],
	set: Set,

	name: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'es-es': "Poliwhirl",
		'it-it': "Poliwhirl",
		'pt-br': "Poliwhirl",
		'de-de': "Quaputzi"
	},

	illustrator: "Scav",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard",
		'es-es': "Poliwag",
		'it-it': "Poliwag",
		'pt-br': "Poliwag",
		'de-de': "Quapsel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'es-es': "Puño Ligero",
			'it-it': "Pugnetto",
			'pt-br': "Soco de Luz",
			'de-de': "Leichter Hieb"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Double Smash",
			'fr-fr': "Double Broiement",
			'es-es': "Golpe Doble",
			'it-it': "Colpo Duplice",
			'pt-br': "Bordoada Dupla",
			'de-de': "Doppelstoß"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674042,
				tcgplayer: 283904
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674042,
				tcgplayer: 283904
			}
		},
	],
}

export default card
