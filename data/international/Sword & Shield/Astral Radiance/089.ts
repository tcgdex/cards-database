import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [211],
	set: Set,

	name: {
		'en-us': "Hisuian Qwilfish",
		'fr-fr': "Qwilfish de Hisui",
		'es-es': "Qwilfish de Hisui",
		'it-it': "Qwilfish di Hisui",
		'pt-br': "Qwilfish de Hisui",
		'de-de': "Hisui-Baldorfish"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Spiny Rush",
			'fr-fr': "Assaut Épineux",
			'es-es': "Envite Espinoso",
			'it-it': "Aculeoraffica",
			'pt-br': "Arremetida Espinhosa",
			'de-de': "Stachelsturm"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Fishers detest this troublesome Pokémon because it sprays poison from its spines, getting it everywhere. A different form of Qwilfish lives in other regions.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658710,
				tcgplayer: 272290
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658710,
				tcgplayer: 272290
			}
		},
	],
}

export default card
