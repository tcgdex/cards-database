import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [659],
	set: Set,

	name: {
		'fr-fr': "Sapereau",
		'en-us': "Bunnelby",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Pied-Piétine",
			'en-us': "Stompy Stomp",
			'es-es': "Pisotonazo",
			'it-it': "Pesto Ripesto",
			'pt-br': "Pisada",
			'de-de': "Hopphopphurra"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 10 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It's very sensitive to danger. The sound of Corviknight's flapping will have Bunnelby digging a hole to hide underground in moments.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725255,
				tcgplayer: 509727,
				cardtrader: 256071
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725255,
				tcgplayer: 509727,
				cardtrader: 256071
			}
		},
	],

	illustrator: "Lee HyunJung",

	
}

export default card
