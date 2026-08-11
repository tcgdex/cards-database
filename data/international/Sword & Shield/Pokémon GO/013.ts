import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [322],
	set: Set,

	name: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'es-es': "Numel",
		'it-it': "Numel",
		'pt-br': "Numel",
		'de-de': "Camaub"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Stomp",
			'fr-fr': "Écrasement",
			'es-es': "Pisotón",
			'it-it': "Pestone",
			'pt-br': "Pisotear",
			'de-de': "Stampfer"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 50 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "The magma in its body reaches 2,200 degrees Fahrenheit. Its hump gets smaller when it uses Fire-type moves.",
	},



	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665657,
				tcgplayer: 276947
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665657,
				tcgplayer: 276947
			}
		},
		{
			type: 'reverse',
			subtype: 'peelable-ditto',
			thirdParty: {
				tcgplayer: 277791
			}
		},
	],
}

export default card
