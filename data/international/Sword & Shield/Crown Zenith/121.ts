import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [831],
	set: Set,

	name: {
		'en-us': "Wooloo",
		'fr-fr': "Moumouton",
		'es-es': "Wooloo",
		'it-it': "Wooloo",
		'pt-br': "Wooloo",
		'de-de': "Wolly"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rolling Rollout",
			'fr-fr': "Roulé Déroulé",
			'es-es': "Salir Rodando",
			'it-it': "Rotolamento Ruzzolante",
			'pt-br': "Rolagem Rolante",
			'de-de': "Rollender Walzer"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691840,
				tcgplayer: 478159
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691840,
				tcgplayer: 478159
			}
		},
	],
}

export default card
