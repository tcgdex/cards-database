import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [686],
	set: Set,

	name: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Fickle Attack",
			'fr-fr': "Attaque Inconstante",
			'es-es': "Ataque Impredecible",
			'it-it': "Attacco Bislacco",
			'pt-br': "Ataque Errático",
			'de-de': "Launischer Angriff"
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

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674090,
				tcgplayer: 283958
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674090,
				tcgplayer: 283958
			}
		},
	],
}

export default card
