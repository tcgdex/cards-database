import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [333],
	set: Set,

	name: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Continuous Spin",
			'fr-fr': "Rotation Continue",
			'es-es': "Giro Continuo",
			'it-it': "Eternogiro",
			'pt-br': "Giro Contínuo",
			'de-de': "Dauerdrehung"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
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
	regulationMark: "F",


	description: {
		'en-us': "Its cottony wings are full of air, making them light and fluffy to the touch. Swablu takes diligent care of its wings.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682189,
				tcgplayer: 451792
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682189,
				tcgplayer: 451792
			}
		},
	],
}

export default card
