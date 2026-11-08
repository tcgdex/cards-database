import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [427],
	set: Set,

	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'it-it': "Buneary",
		'pt-br': "Buneary",
		'de-de': "Haspiror"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuu Nishida",

	description: {
		'en-us': "The reason it keeps one ear rolled up is so it can launch a swift counterattack if it's attacked by an enemy."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Double Kick",
			'fr-fr': "Double Pied",
			'de-de': "Doppelkick",
			'es-es': "Doble Patada",
			'pt-br': "Chute Duplo",
			'it-it': "Doppiocalcio"
		},

		damage: "20×",

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582948,
				tcgplayer: 253309
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582948,
				tcgplayer: 253309
			}
		},
	],
}

export default card
