import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
		'es-es': "Zoroark",
		'it-it': "Zoroark",
		'pt-br': "Zoroark",
		'de-de': "Zoroark"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		'en-us': "If it thinks humans are going to discover its den, Zoroark shows them visions that make them wander around in the woods."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Claw",
			'fr-fr': "Double-Griffe",
			'de-de': "Doppelklaue",
			'es-es': "Doble Zarpa",
			'pt-br': "Garra em Dobro",
			'it-it': "Doppio-Artiglio"
		},

		damage: "40×",

		effect: {
			'en-us': "Flip 2 coins. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Night Daze",
			'fr-fr': "Explonuit",
			'de-de': "Nachtflut",
			'es-es': "Pulso Noche",
			'pt-br': "Ofuscamento Noturno",
			'it-it': "Urtoscuro"
		},

		damage: 100
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582799,
				tcgplayer: 253385
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582799,
				tcgplayer: 253385
			}
		},
	],
}

export default card
