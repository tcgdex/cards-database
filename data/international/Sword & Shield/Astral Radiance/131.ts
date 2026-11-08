import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [627],
	set: Set,

	name: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'es-es': "Rufflet",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'de-de': "Geronimatz"
	},

	illustrator: "Eri Yamaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Claw",
			'fr-fr': "Ergots",
			'es-es': "Garra",
			'it-it': "Artiglio",
			'pt-br': "Garra",
			'de-de': "Klaue"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
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
		'en-us': "Its chick-like looks belie its hotheadedness. It challenges its parents at every opportunity, desperate to prove its strength.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658792,
				tcgplayer: 272372
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658792,
				tcgplayer: 272372
			}
		},
	],
}

export default card
